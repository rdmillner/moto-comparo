module.exports = {
  siteMetadata: {
    title: "Moto Comparo",
  },
  plugins: [
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: "https://admin.motocomparo.info/",
        apiBase: "jsonapi",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "7777XXXX",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
