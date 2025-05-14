export default {
  install(app, options) {
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((o, i) => o?.[i], options) ?? '*перевод не найден+'
    }
    app.provide('i18n', options)
  }
}
