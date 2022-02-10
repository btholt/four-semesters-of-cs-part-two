module.exports = {
  siteMetadata: {
    title: `4 Semesters of Computer Science`,
    subtitle: " Part 2",
    description:
      "Learn the basics of Computer Science in Five Hours using JavaScript!",
    keywords: ["computer science","javascript","cs","bloom filters", "algorithms", "sorting"]
  },
  pathPrefix: "/four-semesters-of-cs-part-two",
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
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
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
