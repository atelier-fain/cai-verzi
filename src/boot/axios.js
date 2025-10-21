import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' })

let IMGS_BASE_URL

export default defineBoot(({ app }) => {
  const hostname = window.location.hostname

  IMGS_BASE_URL =
    process.env.NODE_ENV === 'production'
      ? hostname === 'atelier-fain.github.io'
        ? '/cai-verzi'
        : ''
      : ''


  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api, IMGS_BASE_URL }
