module.exports = {
  siteMetadata: {
    title: 'Fquiz'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'quiz',
        path: `${__dirname}/src/quiz`
      }
    }
  ]
}
