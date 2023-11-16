/**
 * @description: 调用该函数，实现svg转img并输出
 * @param {Number} width 
 * @param {Number} height 
 * @param {String} imgName 
 */
const svgToImg = (width, height, imgName) => {
  const svg = document.querySelector('svg')
  const svgData = svg.outerHTML
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  const img = document.createElement('img')
  img.setAttribute('src', 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgData))))
  img.onload = () => {
    ctx.drawImage(img, 0, 0)
    const imgData = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.setAttribute('href', imgData)
    a.setAttribute('download', imgName)
    a.click()
  }
}

const clickBtn = document.getElementById("imgBtn")
const clickOutPutBtn = document.getElementById("btnOutputImg")
const setWidth = document.getElementById("imgWidth")
const setHeight = document.getElementById("imgHeight")
const setName = document.getElementById("imgName")
const closeModal = document.getElementById("btnCloseModal")
clickBtn.addEventListener("click", () => {
  clickOutPutModal.style.display = "flex"

})

clickOutPutBtn.addEventListener("click",() => {
  svgToImg(setWidth.value,setHeight.value,setName.value)
})

closeModal.addEventListener("click",() => {
  clickOutPutModal.style.display = "none"
})


