// https://nuxt.com/docs/api/configuration/nuxt-config
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/hongkb24.github.io',
        },
      }
    : {};

export default defineNuxtConfig({
  ...routerBase,
});
