import React from 'react'

export default class Quiz extends React.Component {
  constructor ({ data }) {
    super()
    const { markdownRemark } = data
    this.state = {
      questions: markdownRemark
    }
  }

  render () {
    return <div>{this.state.questions.frontmatter.type}</div>
  }
}

export const quizQuery = graphql`
  query questions {
    markdownRemark {
      fileAbsolutePath
      frontmatter {
        type
      }
      html
    }
  }
`
