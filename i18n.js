//引入模块
const i18next = window.i18next
const i18nextBrowserLanguageDetector = window.i18nextBrowserLanguageDetector
const jqueryI18next = window.jqueryI18next
const i18nextHttpBackend=window.i18nextHttpBackend
const languageSwitcher=document.getElementById("languageSwitcher")


languageSwitcher.addEventListener('change',(event)=>{i18next.changeLanguage(event.target.value).then(()=>{
  $('body').localize({score:score});
})})

$(function () {
    i18next
      .use(i18nextHttpBackend)
      .use(i18nextBrowserLanguageDetector)
      .init({
        debug: true,
        fallbackLng: 'en',
        load: 'languageOnly',
      }, (err, t) => {
        if (err) return console.error(err);
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        $('body').localize({score:score});
      });
  });
