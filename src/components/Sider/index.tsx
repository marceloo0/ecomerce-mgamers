import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { SiderProps } from '../../constants/interfaces/Sider'
import { Button } from '../Button'

import * as S from './styles'

export const Sider = ({ handleNextSlide, handlePrevSlide }: SiderProps) => {
  return (
    <S.Box>
      <Button
        icon={<IoIosArrowBack size={36} />}
        size="small"
        aria-label="arrow back"
        onClick={handlePrevSlide}
      />
      <Button
        icon={<IoIosArrowForward size={36} />}
        size="small"
        onClick={handleNextSlide}
      />
    </S.Box>
  )
}
