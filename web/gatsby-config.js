// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const token = process.env.GATSBY_SANITY_TOKEN
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: 'HeilsuErla, heilsumarkþjálfun og ráðgjöf með Erlu',
    description: 'Erla Guðmundsdóttir, heilsumarkþjálfi og ráðgjafi, býður upp á heildræna og einstaklingsmiðaða ráðgjöf og þjálfun fyrir einstaklinga og hópa sem vilja taka skref í átt að bættri heilsu og öðlast heilbrigðan lífsstíl til frambúðar.',
    author: '@heilsuerla',
    siteUrl: 'https://www.heilsuerla.is'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-HG249N2SN4' // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MX6PSJF',
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HeilsuErla, heilsumarkþjálfun og ráðgjöf með Erlu',
        short_name: 'HeilsuErla',
        description: 'Erla Guðmundsdóttir, heilsumarkþjálfi og ráðgjafi, býður upp á heildræna og einstaklingsmiðaða ráðgjöf og þjálfun fyrir einstaklinga og hópa sem vilja taka skref í átt að bættri heilsu og öðlast heilbrigðan lífsstíl til frambúðar.',
        start_url: '/',
        background_color: '#f2f5f6',
        theme_color: '#00788c',
        display: 'standalone',
        icon: 'src/assets/Logo_HE.png',
        lang: 'is'
      }
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        ...clientConfig.sanity,
        defaultImageConfig: {
          quality: 80,
          fit: 'max',
          auto: 'format'
        }
      }
    },
    'gatsby-plugin-sharp'

  ]
}
