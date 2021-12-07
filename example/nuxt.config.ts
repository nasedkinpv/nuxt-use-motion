import { resolve } from 'path'
import { defineNuxtConfig } from '@nuxt/bridge'

const modulePath = resolve(__dirname, '../src/module.ts')

export default defineNuxtConfig({
  buildModules: [modulePath],
  motion: {
    directives: {
      'slide-rotate-top': {
        initial: {
          y: -400,
          opacity: 0,
          rotate: 90
        },
        enter: {
          y: 0,
          opacity: 1,
          rotate: 0
        }
      }
    }
  }
})
