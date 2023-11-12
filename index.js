const area = document.querySelector('#地区')
const setGrade = document.querySelector('#设置等级')
const aTags = document.querySelectorAll('#设置等级 a')
const paths = document.querySelectorAll('#地区 path')

let selected
let score =0
let areas = ["黑龙江","甘肃","吉林","内蒙古","山东","河北","北京","天津","西藏","新疆","河南","安徽","山西","湖北","青海","辽宁","广东","江苏","江西","浙江","福建","上海","陕西","湖南","广西","香港","澳门","贵州","重庆","四川","云南","宁夏","台湾","海南"]

const applyData = () => {
    for(let i=0;i<areas.length;i++) {
        if(localStorage[areas[i]]){
            paths[i].setAttribute("level",localStorage[areas[i]])
        } else {
            localStorage[areas[i]]="0"
        }
    }
}

function check(element) {
    for(let i of paths.values()){
        if(i==element){
            return false
        }
    }
    if(element==document.querySelector('#设置等级 h2')) return false
    return true
}

function setScore() {
  let s=0
  for(let i=0;i<areas.length;i++) {
      if(localStorage[areas[i]]){
          s+=Number(localStorage[areas[i]])
      }
  }
  return s
}


applyData()
score =setScore()

document.getElementById("imgBtn").addEventListener("click",()=>{
    document.getElementById("outputModal").style.display="flex"
})

document.getElementById("btnCloseModal").addEventListener("click",()=>{
    document.getElementById("outputModal").style.display="none"
})

document.getElementById("outputModal").addEventListener("submit",() => {
    width=document.getElementById("imgWidth").value
    height=document.getElementById("imgHeight").value
    imgName=document.getElementById("imgName").value
    if(String(width).match("^[1-9][0-9]{1,3}$")){
        svgToImg(width, height,imgName)
    } else {
        alert("请输入10~9999的数值")
    }
});

area.addEventListener('click', (event) => {
    setGrade.style.top=event.clientY+'px'
    setGrade.style.left=event.clientX+'px'
    setGrade.style.display='flex'
    selected=event.target
})

document.addEventListener('click',(event)=>{
    if(check(event.target)){
        setGrade.style.display='none'
    }
})

aTags.forEach(
    (element)=>{
        element.addEventListener('click',(event)=>{
            let level = event.target.getAttribute('data-level')
            selected.setAttribute('level',level)
            localStorage[selected.getAttribute('id')]=level
            score =setScore()
            $('body').localize({score:score});
        })
    }
)