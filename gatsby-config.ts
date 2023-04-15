import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'SupraChat: nuestro vicio es chatear 💬',
    siteUrl: 'https://suprachat.net'
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SupraChat',
        icon: 'src/images/favicon.png',
        short_name: 'SupraChat',
        start_url: '/',
        background_color: '#001233',
        theme_color: '#ffe6dd',
        display: 'standalone'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-postcss'
  ]
}

export default config
