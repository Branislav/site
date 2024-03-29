/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Blog`,
    siteUrl: `https://balazevic.com`, 
    description: 'My personal blog where I write about support and tinkering with various tools and technologies', 
    image:'./src/images/icon.png'
  },
  plugins: [ 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
    }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve:"gatsby-plugin-google-gtag", 
      options:{
        trackingIds: [
          "G-NX1HGY0R8P"
        ],
      }
    }
  ]
};


