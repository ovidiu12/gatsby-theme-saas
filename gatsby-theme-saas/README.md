# A Gatsby theme for SaaS sites
## !! WORK IN PROGRESS !!
A SaaS template with support for MDX pages, and more. More themes coming soon on https://themelify.com/.

[**Demo**](COMING SOON)


## Main Features

- MDX support
- Styling through styled components
- Theming based on styled components theming

## Install

```sh
npm install gatsby-theme-saas
or
yarn add gatsby-theme-saas
```

### Theme options

| Key            | Default Value      | Description                                                                                               |
| -------------- | ------------------ | --------------------------------------------------------------------------------------------------------- |
| `basePath`     | `/`                | Root url                                                                                   |
| `homePath` | `content/home` | Home content                                                                                      |
| `pagesPath`    | `content/pages`    | Pages content                                                                  |
| `mdx`          | `true`             | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

#### Configuration
You can customize the theme throguh the `siteMetadata` object that you can pass in `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Themelify SaaS`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://themelify.com/saas`,
    // Used for SEO
    siteDescription: `A Gatsby theme built for SaaS websites`,
    // Your website logo which will display along the siteTitle in the navbar
    // Has to be placed inside the folder where you keep your home content (default: "content/home")
    logo: `my-logo.png`
  }
};
```

### Formats

Home content needs the following frontmatter:

```md
---
title: "Home"
slug: "/"
logo: "./logo.png"
hero_title: "Blazing fast development"
hero_description: "Build a blazing fast site in no time using our SaaS theme."
hero_btn: "Get Started"
hero_image: "./hero-illustration.png"
---
```

Pages need the following frontmatter:

```md
---
title: "Name"
slug: "/name"
cover: "./name.jpg"
---
```

Documentation and theme inspired by https://themes.lekoarts.de
