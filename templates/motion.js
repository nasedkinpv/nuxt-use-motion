import { MotionPlugin } from '@vueuse/motion'
import { defineNuxtPlugin } from '@nuxt/kit'
import defu from 'defu'
import appOptions from './motion.config'

const options = defu(appOptions, <%= JSON.stringify(options, null, 2) %>)

defineNuxtPlugin(
  (nuxtApp) => {
    nuxtApp.vueApp.use(MotionPlugin, options)
  }
)
