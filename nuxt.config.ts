// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  nitro: {
    preset: 'static',
  },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'MADEE-HOUSE',
      titleTemplate: '%s | MADEE-HOUSE',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Full Stack Developer specializing in web and application development with Nuxt.js, Fastify, React and the latest technologies' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'MADEE-HOUSE' },
        { property: 'og:description', content: 'Transforming ideas into exceptional digital experiences — Full Stack Developer crafting innovative solutions with cutting-edge technologies that drive real business results' },
        { property: 'og:image', content: '/profile.png' },
        { property: 'og:url', content: 'https://madeehouse.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MADEE-HOUSE' },
        { name: 'twitter:description', content: 'Transforming ideas into exceptional digital experiences — Full Stack Developer crafting innovative solutions with cutting-edge technologies that drive real business results' },
        { name: 'twitter:image', content: '/profile.png' },
        { name: 'keywords', content: 'Full Stack Developer, Vue.js, Nuxt.js, React, Node.js, Web Development, Frontend, Backend, DevOps, Portfolio' },
        { name: 'author', content: 'Nattapon Chanponsaen' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://madeehouse.com' },
      ],
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
