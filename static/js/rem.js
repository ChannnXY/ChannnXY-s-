function refreshRem () {
  let d = document.documentElement
  let width = d.getBoundingClientRect().width
  // 获取当前设备的宽度
  console.log(width)
  if (width > 1920) {
    width = 1920
  }
  let rem = width / 19.2
  console.log('1 rem = ' + rem)
  d.style.fontSize = rem + 'px'
}

refreshRem()

window.addEventListener('resize', function () {
  // 监听横竖屏切换
  refreshRem()
}, false)
