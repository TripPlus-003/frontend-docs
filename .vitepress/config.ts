import { defineConfig } from 'vitepress';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tripplus-docs",
  description: "frontend documents",
  srcDir: `${path.resolve(process.cwd())}/src`,
  base: '/frontend-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Utils', link: '/utils/' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting start', link: '/guide/' },
          { text: 'System environment', link: '/guide/environment' },
          { text: 'System request', link: '/guide/request' },
          { text: 'Layout', link: '/guide/layout' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TripPlus-003/Frontend' }
    ]
  }
})
