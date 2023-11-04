const area = document.querySelector('#地区')
const setGrade = document.querySelector('#设置等级')
const aTags = document.querySelectorAll('#设置等级 a')
const paths = document.querySelectorAll('#地区 path')
const scoreText = document.querySelector('#分数')


document.addEventListener('DOMContentLoaded', function () {
    area.addEventListener('click', (event) => {
        if (setGrade.style.display == '' || setGrade.style.display == 'none') {
            setGrade.style.display = 'block'
        }
        
    })
    
})

const applyData = () => {

}