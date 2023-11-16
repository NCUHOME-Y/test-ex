//引入模块
const i18next = window.i18next
const i18nextBrowserLanguageDetector = window.i18nextBrowserLanguageDetector
const jqueryI18next = window.jqueryI18next
const TranslateBtn = document.getElementById("languageSwitcher")
const everyElements = document.querySelectorAll("[data-i18n]")

const updateContent = () => {
    $('[data-i18n]').localize()
}


$(document).ready(async () => {
    let response = await axios.get(`./i18n.json`)
    let data = response.data
    i18next
        .init(
            {
                fallbackLng: '简体中文',
                debug: true,
                saveMissing: true,
                resources: data
            },
            function (err, t) {
                if (err) {
                    console.error('Error initializing i18next:', err)
                    return
                }
                jqueryI18next.init(i18next, $, { useOptionsAttr: true })
                updateContent()
            })


    $('#languageSwitcher').change(function () {
        var lang = $(this).val()
        console.log(lang)
        i18next.changeLanguage(lang, function (err, t) {
            if (err) {
                console.error('Error changing language:', err)
                return
            }
            updateContent()
        });
    });
})

