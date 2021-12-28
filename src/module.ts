import { resolve } from 'path'
import { defineNuxtModule, addTemplate, addPluginTemplate } from '@nuxt/kit'
import { MotionVariants } from '@vueuse/motion'
import defu from 'defu'

export interface ModuleOptions {
  directives?: {
    [key: string]: MotionVariants
  }
  excludePresets?: boolean
}

const DEFAULTS: ModuleOptions = {}

const CONFIG_KEY = 'motion'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-use-motion',
    configKey: CONFIG_KEY,
    compatibility: {
      nuxt: '>=3.0.0',
      bridge: true
    }
  },
  defaults: DEFAULTS,
  setup(moduleOptions, nuxt) {
    const options: ModuleOptions = defu(moduleOptions, DEFAULTS)

    addTemplate({
      fileName: 'motion.config.js',
      src: resolve(__dirname, '../templates', 'motion.config.js')
    })

    addPluginTemplate({
      src: resolve(__dirname, '../templates', 'motion.js'),
      fileName: 'motion.js',
      options
    })

    if (!nuxt.options.build.transpile) {
      nuxt.options.build.transpile = []
    }

    const transpileList = nuxt.options.build.transpile

    // Transpile necessary packages at build time
    ;['defu', '@vueuse/motion', '@vueuse/shared', '@vueuse/core'].forEach(
      (pkgName) => {
        if (!transpileList.includes(pkgName)) {
          transpileList.push(pkgName)
        }
      }
    )

    /**
     * Workaround for TSLib issue on @nuxt/bridge and nuxt3
     */

    if (!nuxt.options.alias) {
      nuxt.options.alias = {}
    }

    if (!nuxt.options.alias.tslib) {
      nuxt.options.alias.tslib = 'tslib/tslib.es6.js'
    }
  }
})

declare module '@nuxt/kit' {
  interface NuxtConfig {
    [CONFIG_KEY]?: ModuleOptions
  }

  interface Configuration {
    [CONFIG_KEY]?: ModuleOptions
  }
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    [CONFIG_KEY]?: ModuleOptions
  }
}
