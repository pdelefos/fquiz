import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'

import './swiper.scss'

const Slider = ({ children, className }) => {
  const params = {}
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
