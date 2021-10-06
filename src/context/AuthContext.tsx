import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth, firebase } from '../services/firebase'
import Router from 'next/router'
import cookie from 'js-cookie'

type User = {
  id: string
  name: string
  avatar: string
  email: string
}

type AuthContextType = {
  user: User | undefined
  signinGoogle: () => Promise<void>
  signout: () => void
  loadingPage: (load: boolean) => void
  loading: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        Router.push('/')
        const { displayName, photoURL, uid, email } = user

        if (!displayName || !photoURL || !email) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email
        })
        cookie.set('@mgamers-auth', { expires: 1 })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signinGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    try {
      setLoading(true)
      const response = await auth.signInWithPopup(provider)

      if (response.user) {
        const { displayName, photoURL, uid, email } = response.user

        if (!displayName || !photoURL || !email) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email
        })
        Router.push('/')
      }
    } finally {
      setLoading(false)
    }
  }

  const loadingPage = async (load: boolean) => {
    setLoading(load)
  }

  const signout = async () => {
    try {
      setLoading(true)
      Router.reload()
      await firebase.auth().signOut()
      setUser({} as User)
      cookie.remove('@mgamers-auth')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, signout, signinGoogle, loading, loadingPage }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
