$(document).ready(function () {
  let lang
  if (Lockr.get('Lang') == undefined) {
    Lockr.set('Lang', 'en')
    lang = 'en'
  }
  else {
    lang = Lockr.get('Lang')
  }
  $('.currentLang').attr('src', '/img/icon/' + lang + '.png')
  i18next
    .use(i18nextXHRBackend)
    .init({
      lng: lang,
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }
    }, function (err, t) {
      jqueryI18next.init(i18next, $)
      $('.navbar').localize()
      $('.title').localize()
      $('.about').localize()
      $('.subtitle').localize()
      $('.subintro').localize()
      $('.projects').localize()
      $('.career').localize()
      $('.footer').localize()
      $('.lang-select').click(function () {
        let choice = $(this).attr('name')
        Lockr.set('Lang', choice)
        $('.currentLang').attr('src', '/img/icon/' + choice + '.png')
        i18next.changeLanguage(choice, function () {
          $('.navbar').localize()
          $('.title').localize()
          $('.about').localize()
          $('.subtitle').localize()
          $('.subintro').localize()
          $('.projects').localize()
          $('.career').localize()
          $('.footer').localize()
        })
      })
    })
})
