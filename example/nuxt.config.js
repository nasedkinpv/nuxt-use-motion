export default {
  buildModules: ['../src/module.ts'],
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
}
