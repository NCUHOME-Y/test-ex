const area = document.querySelector('#地区')
const setGrade = document.querySelector('#设置等级')
const getLocation = document.querySelector('#设置等级 h2')
const aTags = document.querySelectorAll('#设置等级 a')
const paths = document.querySelectorAll('#地区 path')
const scoreText = document.getElementById("scoreNumber")
const clickOutPutModal = document.getElementById("outputModal")
let initScore = 0




// paths.forEach((event) => {
//     event.addEventListener("click", () => {
//         setGrade.style.display = "block"
//         getLocation.innerHTML = event.id
//         console.log(event.id)
//         aTags.forEach((color) => {
//             const getBackgroundColor = window.getComputedStyle(color).getPropertyValue("background-color")
//             const clickHandler = () => {
//                 event.style.fill = getBackgroundColor
//                 setGrade.style.display = "none"
//                 let scoreAdding = color.getAttribute("data-level")
//                 let newScoreAdding = parseInt(scoreAdding)
//                 console.log(newScoreAdding)
//                 initScore += newScoreAdding
//                 scoreText.innerHTML = initScore

//             }
//             color.addEventListener("click", clickHandler)
//         })

//     })
// })





let ifClicked = false
let currentColor = null
area.addEventListener('click', (event) => {
    setGrade.style.display = "block"
    const clickEvent = event.target
    getLocation.innerHTML = clickEvent.id
    aTags.forEach((color) => {
        color.addEventListener("click", () => {
            ifClicked = true
            currentColor = color
        })
    })
    console.log(ifClicked)

    if (ifClicked && currentColor) {
        const getBackgroundColor = window.getComputedStyle(currentColor).getPropertyValue("background-color")
        clickEvent.style.fill = getBackgroundColor
        setGrade.style.display = "none"
        let scoreAdding = currentColor.getAttribute("data-level")
        let newScoreAdding = parseInt(scoreAdding)
        initScore += newScoreAdding
        scoreText.innerHTML = initScore
        ifClicked = false
    }

});





