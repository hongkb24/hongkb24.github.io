// import Antd from "ant-design-vue";
// import 'ant-design-vue/dist/antd.css';

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(Antd)
// })

import {defineNuxtPlugin} from "#app";
import Antd from 'ant-design-vue/lib';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Antd);
})
