//分数计算相关函数在此
const provinceName = document.getElementById("LocName")//获取菜单的省份占位
const finalScore = document.getElementById("真的分数")

let Lived = []
let Stayed = []
let Visited = []
let Stopped = []
let Passed = []
// let Never = []

function LivedHere(province, isClickItem) {
    deleteItem(isClickItem)
    if (isClickItem)
        Lived.push(province.id)
    province.style.fill = "rgb(255, 126, 126)"
    updateFinalScore()
}

function StayedHere(province, isClickItem) {
    deleteItem(isClickItem)
    if (isClickItem)
        Stayed.push(province.id)
    province.style.fill = "rgb(255, 181, 126)"
    updateFinalScore()
}

function VisitedHere(province, isClickItem) {
    deleteItem(isClickItem)
    if (isClickItem)
        Visited.push(province.id)
    province.style.fill = "rgb(255, 229, 126)"
    updateFinalScore()
}

function StoppedHere(province, isClickItem) {
    deleteItem(isClickItem)
    if (isClickItem)
        Stopped.push(province.id)
    province.style.fill = "rgb(168, 255, 190)"
    updateFinalScore()
}

function PassedHere(province, isClickItem) {
    deleteItem(isClickItem)
    if (isClickItem)
        Passed.push(province.id)
    province.style.fill = "rgb(136, 174, 255)"
    updateFinalScore()
}

function NeverBeenHere(province, isClickItem) {
    deleteItem(isClickItem)
    province.style.fill = "rgb(255, 255, 255)"
    updateFinalScore()
}


document.querySelector("#设置等级 a:nth-child(5)").addEventListener("click", () => {
    let province = document.getElementById(provinceName.innerHTML)
    LivedHere(province, true)
    AllSetStorage()
})

document.querySelector("#设置等级 a:nth-child(6)").addEventListener("click", () => {
    let province = document.getElementById(provinceName.innerHTML)
    StayedHere(province, true)
    AllSetStorage()
})

document.querySelector("#设置等级 a:nth-child(7)").addEventListener("click", () => {
    let province = document.getElementById(provinceName.innerHTML)
    VisitedHere(province, true)
    AllSetStorage()
})

document.querySelector("#设置等级 a:nth-child(8)").addEventListener("click", () => {
    let province = document.getElementById(provinceName.innerHTML)
    StoppedHere(province, true)
    AllSetStorage()
})

document.querySelector("#设置等级 a:nth-child(9)").addEventListener("click", () => {
    let province = document.getElementById(provinceName.innerHTML)
    PassedHere(province, true)
    AllSetStorage()
})

document.querySelector("#设置等级 a:nth-child(10)").addEventListener("click", () => {
    let province = document.getElementById(provinceName.innerHTML)
    NeverBeenHere(province, true)
    AllSetStorage()
})

function deleteItem(isClickItem) { //用于判断是否为加载cookie时执行的此函数
    if (isClickItem) {
        let province = document.getElementById(provinceName.innerHTML)
        switch (province.style.fill) {
            case "rgb(255, 126, 126)":
                Lived.splice(Lived.indexOf(provinceName.innerHTML), 1)
                break
            case "rgb(255, 181, 126)":
                Stayed.splice(Stayed.indexOf(provinceName.innerHTML), 1)
                break
            case "rgb(255, 229, 126)":
                Visited.splice(Visited.indexOf(provinceName.innerHTML), 1)
                break
            case "rgb(168, 255, 190)":
                Stopped.splice(Stopped.indexOf(provinceName.innerHTML), 1)
                break
            case "rgb(136, 174, 255)":
                Passed.splice(Passed.indexOf(provinceName.innerHTML), 1)
                break
            case "rgb(255, 255, 255)":
                Bstatus = "Never"
                break
            default:
                Bstatus = "Never"
                break
        }
        closeMenu()
    }
}

function updateFinalScore() {
    score = Lived.length * 5 + Stayed.length * 4 + Visited.length * 3 + Stopped.length * 2 + Passed.length * 1
    finalScore.innerHTML = `${score}`
}

//以下读取cookie

function AllSetStorage() {
    setStorage("cLived", Lived, 7)
    setStorage("cStayed", Stayed, 7)
    setStorage("cVisited", Visited, 7)
    setStorage("cStopped", Stopped, 7)
    setStorage("cPassed", Passed, 7)
}

function AllReadStorage() {
    console.log("调试")
    if (getStorage("cLived") != null)
        Lived = getStorage("cLived")
    if (getStorage("cStayed") != null)
        Stayed = getStorage("cStayed")
    if (getStorage("cVisited") != null)
        Visited = getStorage("cVisited")
    if (getStorage("cStopped") != null)
        Stopped = getStorage("cStopped")
    if (getStorage("cPassed") != null)
        Passed = getStorage("cPassed")
    if (Lived.length > 0)
        for (i = 0; i < Lived.length; i++) {
            console.log("1  " + i + "  " + Lived)
            LivedHere(document.getElementById(Lived[i]), false)
        }
    if (Stayed.length > 0)
        for (i = 0; i < Stayed.length; i++) {
            console.log("2")
            StayedHere(document.getElementById(Stayed[i]), false)
        }
    if (Visited.length > 0)
        for (i = 0; i < Visited.length; i++) {
            console.log("3")
            VisitedHere(document.getElementById(Visited[i]), false)
        }
    if (Stopped.length > 0)
        for (i = 0; i < Stopped.length; i++) {
            console.log("4")
            StoppedHere(document.getElementById(Stopped[i]), false)
        }
    if (Passed.length > 0)
        for (i = 0; i < Passed.length; i++) {
            console.log("5")
            PassedHere(document.getElementById(Passed[i]), false)
        }
}

AllReadStorage()

function gotohell_Storage() {
    localStorage.removeItem("cLived");
    localStorage.removeItem("cStayed");
    localStorage.removeItem("cVisited");
    localStorage.removeItem("cStopped");
    localStorage.removeItem("cPassed");
    alert("LocalStorage已经去死！！")
    location.reload();

}