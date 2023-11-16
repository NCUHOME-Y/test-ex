// const area = document.querySelector('#地区')
const setGrade = document.querySelector('#设置等级')
// const aTags = document.querySelectorAll('#设置等级 a')
const paths = document.querySelectorAll('#地区 path')
const scoreText = document.querySelector('#分数')
const i18nElements = document.querySelectorAll("[data-i18n]")
const languageSelect = document.querySelector("#languageSwitcher")
const levelSelectElements = document.querySelectorAll("[data-level]")
const savePicWindow = document.querySelector("#outputModal")
const savePicButton = document.querySelector("#imgBtn")
const cancelWindow = document.querySelector("#btnCloseModal")
const generatePicButton = document.querySelector("#btnOutputImg")

let selectedElement
let savedJSON = {}

function saveData() {
    localStorage.setItem("score", JSON.stringify(savedJSON))
}

function loadData() {
    savedJSON = JSON.parse(localStorage.getItem("score"))
    for (const [key, value] of Object.entries(savedJSON)) {
        document.querySelector(`#${key}`).setAttribute("score", parseFloat(value))
    }
}

function calcScore() {
    let totalScore = 0
    paths.forEach(element =>{
        let score = parseFloat(element.getAttribute("score"))
        totalScore += score
        if (score === 5) {
            element.style.fill = "#ff7e7e"
        } else if (score === 4) {
            element.style.fill = "#ffb57e"
        } else if (score === 3) {
            element.style.fill = "#ffe57e"
        } else if (score === 2) {
            element.style.fill = "#a8ffbe"
        } else if (score === 1) {
            element.style.fill = "#88aeff"
        } else if (score === 0) {
            element.style.fill = "#ffffff"
        }
        savedJSON[element.id] = score
    })
    saveData()
    scoreText.innerHTML = i18next.t("svg.score") + " " + totalScore.toString()
}

savePicButton.addEventListener("click", ()=>{
    savePicWindow.style.display = "flex"
})

cancelWindow.addEventListener("click", ()=>{
    savePicWindow.style.display = "none"
})

generatePicButton.addEventListener("click", ()=>{
    svgToImg(document.querySelector("#imgWidth").value, document.querySelector("#imgHeight").value, document.querySelector("#imgName").value)
})

levelSelectElements.forEach(element =>{
    element.addEventListener("click", ()=>{
        let score = parseFloat(element.getAttribute("data-level"))
        selectedElement.setAttribute("score", score)
        calcScore()
        setGrade.style.display = "none"
    })
})

languageSelect.addEventListener("change", ()=>{
    if (languageSelect.value === "中文") {
        i18next.changeLanguage("zh")
    } else {
        i18next.changeLanguage("en")
    }
    i18nElements.forEach(element =>{
        element.innerHTML = i18next.t(element.getAttribute("data-i18n"))
    })
    calcScore()
})

// area.addEventListener('click', (event) => {
//     // setGrade.style.display = "none"
// })

paths.forEach(element =>{
    // element.setAttribute("score", 0)
    element.addEventListener("click", (e)=>{
        selectedElement = element
        const X = e.clientX
        const Y = e.clientY
        setGrade.style.display = "block"
        setGrade.style.left = X+"px"
        setGrade.style.top = Y+"px"
    })
})

// aTags.forEach(element => {
//     element.addEventListener("click", (e)=>{
//         element.style.backgroundColor = ""
//     })
//     }
// )

const applyData = () => {

}
i18nElements.forEach(element =>{
    element.innerHTML = i18next.t(element.getAttribute("data-i18n"))
})
loadData()
calcScore()