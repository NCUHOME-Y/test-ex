//引入模块
const i18next = window.i18next
const i18nextBrowserLanguageDetector = window.i18nextBrowserLanguageDetector
const jqueryI18next = window.jqueryI18next

i18next
    // .use(i18nextBrowserLanguageDetector)
    .init({
        lng: 'zh', // if you're using a language detector, do not define the lng option
        debug: true,
        resources: {
            en: {
                translation: {
                    "areaOpi": {
                        "title": "Area",
                        "data_level_5": "Lived Here",
                        "data_level_4": "Stayed Here",
                        "data_level_3": "Visited Here",
                        "data_level_2": "Stopped Here",
                        "data_level_1": "Passed Here",
                        "data_level_0": "Never Been Here"
                    },
                    "svg": {
                        "title": "China ex",
                        "sign": "By NCUHOME",
                        "score": "Score:",
                        "level_0": "Never Been Here",
                        "level_1": "Passed Here",
                        "level_2": "Stopped Here",
                        "level_3": "Visited Here",
                        "level_4": "Stayed Here",
                        "level_5": "Lived Here"
                    },
                    "imgModal": {
                        "title": "Generate Image",
                        "width": "Width",
                        "height": "Height",
                        "name": "Image Name",
                        "submit": "Generate Image",
                        "cancel": "Cancel"
                    },
                    "footer": {
                        "img": "Generate Image"
                    }
                }
            },
            zh: {
                translation: {
                    "areaOpi": {
                        "title": "地区",
                        "data_level_5": "居住过",
                        "data_level_4": "住宿过",
                        "data_level_3": "游玩过",
                        "data_level_2": "中转过",
                        "data_level_1": "路过",
                        "data_level_0": "没去过",
                        "pt": "分"
                    },
                    "svg": {
                        "title": "中国制霸",
                        "sign": "家园工作室出品",
                        "score": "分数:",
                        "level_0": "没去过",
                        "level_1": "路过1",
                        "level_2": "中转2",
                        "level_3": "游玩3",
                        "level_4": "住宿4",
                        "level_5": "居住5"
                    },
                    "imgModal": {
                        "title": "生成图片",
                        "width": "宽度",
                        "height": "高度",
                        "name": "图片名称",
                        "submit": "确认生成图片",
                        "cancel": "取消"
                    },
                    "footer": {
                        "img": "生成图片",
                        "lang": "设置语言"
                    }
                }
            }
        }
    });