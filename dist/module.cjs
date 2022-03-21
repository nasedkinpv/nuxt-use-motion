'use strict';

const path = require('path');
const kit = require('@nuxt/kit');
const defu = require('defu');

function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const defu__default = /*#__PURE__*/_interopDefaultLegacy(defu);

const DEFAULTS = {};
const CONFIG_KEY = "motion";
const module$1 = kit.defineNuxtModule({
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
    const options = defu__default(moduleOptions, DEFAULTS);
    kit.addTemplate({
      fileName: "motion.config.js",
      src: path.resolve(__dirname, "../templates", "motion.config.js")
    });
    kit.addPluginTemplate({
      src: path.resolve(__dirname, "../templates", "motion.js"),
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

module.exports = module$1;
