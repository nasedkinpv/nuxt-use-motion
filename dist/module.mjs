import { resolve } from 'path';
import { defineNuxtModule, addTemplate, addPluginTemplate } from '@nuxt/kit';
import defu from 'defu';

const DEFAULTS = {};
const CONFIG_KEY = "motion";
const module = defineNuxtModule({
  meta: {
    name: "nuxt-use-motion",
    configKey: CONFIG_KEY,
    compatibility: {
      nuxt: ">=2.0.0",
      bridge: true
    }
  },
  defaults: DEFAULTS,
  setup(moduleOptions, nuxt) {
    const options = defu(moduleOptions, DEFAULTS);
    addTemplate({
      fileName: "motion.config.js",
      src: resolve(__dirname, "../templates", "motion.config.js")
    });
    addPluginTemplate({
      src: resolve(__dirname, "../templates", "motion.js"),
      fileName: "motion.js",
      options
    });
    if (!nuxt.options.build.transpile) {
      nuxt.options.build.transpile = [];
    }
    const transpileList = nuxt.options.build.transpile;
    ["defu", "@vueuse/motion", "@vueuse/shared", "@vueuse/core"].forEach((pkgName) => {
      if (!transpileList.includes(pkgName)) {
        transpileList.push(pkgName);
      }
    });
    if (!nuxt.options.alias) {
      nuxt.options.alias = {};
    }
    if (!nuxt.options.alias.tslib) {
      nuxt.options.alias.tslib = "tslib/tslib.es6.js";
    }
  }
});

export { module as default };
