# A Gatsby theme for SaaS sites
A SaaS template with support for MDX pages, and more. More themes coming soon on https://themelify.com/.

[**Demo**](https://saas.themelify.com/) | 
[Source Code](https://github.com/ovidiu12/gatsby-theme-saas) |
[Example](https://github.com/ovidiu12/gatsby-theme-saas/tree/master/site)

## Main Features

- MDX support
- Styling and theming through styled components

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
You can configure the theme through the `siteMetadata` object that you can pass in `gatsby-config.js`

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

#### Customization
You can customize the theme through Gatsby's concept known as [Component Shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/). Basically you can overwrite any of the theme's components. 
Let's say you want to edit the colors used in the website:

```
//Folder structure

my-site
└── src
    ├── gatsby-theme-saas
       ├── theme
         └── colors.js
         
After you created the folder structure, inside colors.js simply

export default colors = {
  primary: 'red',
  secondary: 'blue'
}
```

### Formats

Home content needs the following frontmatter:

```md
---
title: "Home"
slug: "/"
logo: "./logo.png"
hero: {
  hero_title: "Blazing fast development",
  hero_description: "Don't waste time setting up. Use our Gatsby theme and speed up your development.",
  primary_hero_btn: "Get Started",
  secondary_hero_btn: "Contact Us",
  hero_image: "./hero.png"
}
features: [
  { top_title: "Easy setup", title: "MDX Powered", description: "Change the content of the website using only a mdx file or add your custom components", icon: "./gear-icon.png"}
]
how_it_works: [
  {
    title: "Install the theme",
    description: "Install the theme either by downloading it directly from the website or through npm.",
    image: "./npm-illustration.png"
  }
]
call_to_action: {
  title: "Still not sure how it works?",
  cta_button1: "Read docs",
  cta_button2: "Contact Us"
}
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
