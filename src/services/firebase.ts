import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA3amKDRoDjFzwvyH-Zm4ZnCtZOSnnvJIY',
    authDomain: 'mgamers-38891.firebaseapp.com',
    projectId: 'mgamers-38891',
    storageBucket: 'mgamers-38891.appspot.com',
    messagingSenderId: '215448706450',
    appId: '1:215448706450:web:33855cb9346a2bb7b9754b'
    // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  })
}

const auth = firebase.auth()

export { auth, firebase }
