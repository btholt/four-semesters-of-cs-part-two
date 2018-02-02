module.exports = {
  siteMetadata: {
    title: `4 Semesters of Computer Science Part 2`
  },
  pathPrefix: "/four-semesters-of-cs-part-two",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            maxWidth: 800,
            linkImagesToOriginal: true,
            sizeByPixelDensity: false
          }
        ]
      }
    }
  ]
};
