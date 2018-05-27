module.exports = {
  siteMetadata: {
    title: 'Fquiz'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'quiz',
        path: `${__dirname}/src/quiz`
      }
    }
  ]
}
