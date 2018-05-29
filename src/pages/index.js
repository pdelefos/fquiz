import React from 'react'

import './app.scss'
import QuestionSlider from '../components/questionSlider/index'

export default class Quiz extends React.Component {
  constructor ({ data }) {
    super()
    this.state = {
      nuggets: extractNode(data.allNuggetsJson.edges)
    }
  }

  render () {
    return <div><QuestionSlider questions={this.state.nuggets} /></div>
  }
}

const extractNode = edges => edges.map(({ node }) => node)

export const query = graphql`
  query IndexQuery {
    allNuggetsJson {
      edges {
        node {
          index
          type
          reward
          value
          answers {
            order
            type
            value
            goodAnswer
          }
        }
      }
    }
  }
`
