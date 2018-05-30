import React from 'react'

import './style.scss'
import HandFingerRightDirection
  from '../../assets/images/hand-finger-right-direction2.svg'

const SliderButton = ({ direction, className }) => {
  return (
    <a className={`slider-arrow ${className}`}>
      <img
        className={`slider-arrow__img slider-arrow__img--${direction}`}
        src={HandFingerRightDirection}
        alt='Hand with finger pointing to the right direction'
      />
    </a>
  )
}

export default SliderButton
