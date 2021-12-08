import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [{ input: 'src/module.ts', outDir: 'dist', name: 'module' }],
  externals: [
    'csstype',
    '@vueuse/shared',
    'framesync',
    'style-value-types',
    '@nuxt/bridge',
    '@nuxt/kit',
    '@nuxt/schema'
  ]
})
