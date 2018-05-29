import React from 'react'

import './style.scss'
import Slider from '../slider/index'
import '../slider/index'

const QuestionSlider = ({ questions, cardColor }) => {
  return (
    <Slider>
      {questions.map(q => {
        return <div key={q.index} className='card'>{q.value}</div>
      })}
    </Slider>
  )
}

export default QuestionSlider
