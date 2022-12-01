// https://nuxt.com/docs/api/configuration/nuxt-config
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/hongkb24.github.io/",
        },
      }
    : {};

export default defineNuxtConfig({
  app: {
    head: {
      title: "Hong-Kb24",
      meta: [
        { charset: "utf-8" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
        },
        {
          hid: "description",
          name: "description",
          content: "使用 vue + nuxt.js 技术栈构建而成的博客，记录我的文章。",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  ...routerBase,
  buildModules: ["@nuxtjs/eslint-module"],
  // plugins: ["@/plugins/antd"],
  // css: ["ant-design-vue/dist/antd.css"],
});
