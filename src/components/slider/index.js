import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'

import './swiper.scss'
import SliderButton from '../sliderButton/index'

const Slider = ({ children, className }) => {
  const params = {
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // }
    navigation: {
      nextEl: '.slider-arrow--right',
      prevEl: '.slider-arrow--left'
    },
    renderPrevButton: () => (
      <SliderButton className='slider-arrow--left' direction='left' />
    ),
    renderNextButton: () => (
      <SliderButton className='slider-arrow--right' direction='right' />
    )
  }
  return (
    <div className={className}>
      <Swiper {...params}>
        {React.Children.map(children, (child, idx) => {
          return <div key={idx}>{child}</div>
        })}
      </Swiper>
    </div>
  )
}

export default Slider
