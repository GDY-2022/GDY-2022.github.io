// 给首页文章卡片套上动画
var arr = document.getElementsByClassName("recent-post-item");
for(var i = 0;i<arr.length;i++){
    // 必填项 打上wow类名
    arr[i].classList.add("wow"),
    // 必填项 打上动画类名
    arr[i].classList.add("animate__zoomIn"),
    // 动画执行时间
    arr[i].setAttribute("data-wow-duration", "1.5s"),
    // 动画延迟多久后执行
    arr[i].setAttribute("data-wow-delay", "0"),
    // 动画执行次数
    arr[i].setAttribute("data-wow-iteration", "1")
  }
//给侧边栏套动画
var arr2 = document.getElementsByClassName("card-widget");
for(var i = 0;i<arr2.length;i++){
    arr2[i].classList.add("wow");
    arr2[i].classList.add("animate__zoomIn");
    arr2[i].setAttribute("data-wow-duration", "1.5s"),
    arr2[i].setAttribute("data-wow-delay", "0"),
    arr2[i].setAttribute("data-wow-iteration", "1")
  }
//初始化函数
wow = new WOW({
  boxClass: 'wow',
  // 当用户滚动时显示隐藏框的类名称
  animateClass: 'animated',
  // 触发 CSS 动画的类名称（动画库默认为"animate.css"库）
  offset: 0,
  // 定义浏览器视口底部与隐藏框顶部之间的距离。
  // 当用户滚动并到达此距离时，将显示隐藏的框。
  mobile: true,
  // 在移动设备上打开/关闭wow.js。
  live: true
  // 在页面上检查新的 wow.js元素。
})
wow.init();