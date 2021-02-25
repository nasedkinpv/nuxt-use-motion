export default {
  directives: {
    'slide-rotate-bottom': {
      initial: {
        y: 400,
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
