// "use strict";

const area = document.querySelector('#地区')
const aTags = document.querySelectorAll('#设置等级 a')
const paths = document.querySelectorAll('#地区 path')
const scoreText = document.querySelector('#分数')
let isMenuOpen = false;
let isMenuClick = false;

area.addEventListener('click', (event) => {
    isMenuClick = true
    let pos = getMousePos(event)//获取当前鼠标位置
    let currentLoc = event.target//获取当前省份
    let menu = document.getElementById("设置等级")//获取菜单
    let provinceName = document.getElementById("LocName")//获取菜单的省份占位
    let left = document.getElementById("leftArrow")
    if (currentLoc.id == "地区") {
        closeMenu()
        console.log("无效的点击")
        return
    }
    menu.style.opacity = "0"

    if (isMenuOpen) {//判断是否已有菜单，执行不同动画策略
        menu.style.display = "block"
        setTimeout(() => {
            menu.style.position = "fixed"
            menu.style.top = pos.y - 20 + "px"
            menu.style.left = pos.x + 37 + "px"
            if (isInViewPortOfOne(menu, true)) {//判断是否需要反转菜单（防止菜单超出屏幕）
                left.style.top = -2 + "px"
                menu.style.opacity = "1"
            } else {
                menu.style.top = pos.y + 20 - 267 + "px"
                menu.style.left = pos.x + 37 + "px"
                left.style.top = 223 + "px"
                menu.style.opacity = "1"
            }
            provinceName.innerHTML = currentLoc.id//将省份名填入菜单占位
            isMenuOpen = true
        }, 200);
    } else {
        menu.style.display = "block"
        menu.style.position = "fixed"
        menu.style.top = pos.y - 20 + "px"
        menu.style.left = pos.x + 37 + "px"
        if (isInViewPortOfOne(menu, true)) {
            left.style.top = -2 + "px"
            menu.style.opacity = "1"
        } else {
            menu.style.top = pos.y + 20 - 267 + "px"
            menu.style.left = pos.x + 37 + "px"
            left.style.top = 223 + "px"
            menu.style.opacity = "1"
        }
        provinceName.innerHTML = currentLoc.id//将省份名填入菜单占位
        isMenuOpen = true

    }
    setTimeout(() => {
        isMenuClick = false

    }, 2);
    // console.log("X="+pos.x+"Y="+pos.y)
    // console.log(currentLoc)
})

function closeMenu() {
    isMenuOpen = false
    let menu = document.getElementById("设置等级")//获取菜单
    menu.style.opacity = "0"
    setTimeout(() => {
        menu.style.display = "none"
    }, 200);
}

document.addEventListener("scroll", () => {
    let menu = document.getElementById("设置等级")//获取菜单
    if (menu.style.display == "block") {

    }
})

// aTags.forEach(

// )

// const applyData = () => {

// }


// 测试专用
// document.addEventListener("click",(event)=>{


// })

function getMousePos(event) {            //event是一个声明了全局变量的一个对象
    var e = event || window.event;       //Firefox下是没有event这个对象的！！
    return { "x": event.clientX, "y": event.clientY };
}

document.addEventListener("click", () => {
    setTimeout(() => {
        if (!isMenuClick)
            closeMenu()
    }, 1);

})
document.addEventListener("scroll", () => { closeMenu() })
window.addEventListener("resize", () => { closeMenu() })

//判断元素顶/底部是否在屏幕外
function isInViewPortOfOne(el, isBottom) {//参数分别为，元素DOM，是否要求元素底部也在屏幕内
    const viewPortHeight =
        window.innerHeight
    document.documentElement.clientHeight
    document.body.clientHeight;
    const offsetTop = el.offsetTop;
    const scrollTop = document.documentElement.scrollTop;
    const top = offsetTop - scrollTop;
    if (isBottom) {
        return top + el.clientHeight <= viewPortHeight;
    } else {
        return top <= viewPortHeight;
    }
}

//LS
function setStorage(cname, cvalue) {
    localStorage.setItem(cname, JSON.stringify(cvalue));
}

function getStorage(cname) {
    return JSON.parse(localStorage.getItem(cname));;
}


//输出图片区

//弹窗操作
function openGenerateBox() {
    closeMenu()
    const GBox = document.getElementById("outputModal")
    GBox.style.display = "block"
    setTimeout(() => {
        GBox.style.opacity = "1"
    }, 10);
}

function closeGenerateBox() {
    const GBox = document.getElementById("outputModal")
    GBox.style.opacity = "0"
    setTimeout(() => {
        GBox.style.display = "none"
    }, 300);

}


//生成图片
//用户是否手动改变宽高
let width_height_haveChanged = false

//用户没改情况下，自动在窗口大小改变时改变宽高
window.addEventListener("resize", () => {
    if (!width_height_haveChanged)
        get_and_replace_Holder()
})

document.getElementById("imgHeight").addEventListener("change", () => {
    width_height_haveChanged = true
})

document.getElementById("imgWidth").addEventListener("change", () => {
    width_height_haveChanged = true
})

//自动改变宽高
function get_and_replace_Holder() {
    document.getElementById("imgWidth").value = document.getElementById("主体").clientWidth
    document.getElementById("imgHeight").value = document.getElementById("主体").clientHeight
    document.getElementById("imgWidth").placeholder = document.getElementById("主体").clientWidth
    document.getElementById("imgHeight").placeholder = document.getElementById("主体").clientHeight
    width_height_haveChanged = false
}

//打开时改变一次宽高
get_and_replace_Holder()

//输出图片
function convert() {
    if (document.getElementById("imgWidth").value != "" && document.getElementById("imgHeight").value != "") {
        html2canvas(document.getElementById("主体"), {
            width: document.getElementById("主体").clientWidth,
            height: document.getElementById("主体").clientHeight
        }).then(canvas => {
            canvas.toBlob(function (blob) {
                saveAs(blob, document.getElementById("imgName").value + ".png");
            });
        });
    } else {
        html2canvas(document.getElementById("主体")).then(canvas => {
            canvas.toBlob(function (blob) {
                alert("未输入所有尺寸，将使用默认尺寸输出")
                saveAs(blob, document.getElementById("imgName").value + ".png");
            });
        });
    }
}