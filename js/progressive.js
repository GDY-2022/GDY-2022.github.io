/**
 * @description 实现medium的渐进加载背景的效果
 */
class ProgressiveLoad {
    constructor(smallSrc, largeSrc) {
      this.smallSrc = smallSrc;
      this.largeSrc = largeSrc;
      this.initTpl();
      this.progressiveLoad();
    }
  
    /**
     * @description 生成ui模板
     */
    initTpl() {
      this.container = document.createElement('div');
      this.smallStage = document.createElement('div');
      this.largeStage = document.createElement('div');
      this.smallImg = new Image();
      this.largeImg = new Image();
      this.container.className = 'pl-container';
      this.smallStage.className = 'pl-img pl-blur';
      this.largeStage.className = 'pl-img';
      this.container.appendChild(this.smallStage);
      this.container.appendChild(this.largeStage);
      this.smallImg.onload = this._onSmallLoaded.bind(this);
      this.largeImg.onload = this._onLargeLoaded.bind(this);
    }
  
    /**
     * @description 加载背景
     */
    progressiveLoad() {
      this.smallImg.src = this.smallSrc;
      this.largeImg.src = this.largeSrc;
    }
  
    /**
     * @description 大图加载完成
     */
    _onLargeLoaded() {
      this.largeStage.classList.add('pl-visible');
      this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
    }
  
    /**
     * @description 小图加载完成
     */
    _onSmallLoaded() {
      this.smallStage.classList.add('pl-visible');
      this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
    }
  }
  
  const executeLoad = (config) => {
    console.log('执行渐进背景替换');
    const loader = new ProgressiveLoad(config.smallSrc, config.largeSrc);
    const target = document.getElementById('page-header');
    // 和背景图颜色保持一致，防止高斯模糊后差异较大
    if (target.children[0]) {
      target.insertBefore(loader.container, target.children[0]);
    }
  };
  
  // 拓展参数
  const config = {
    smallSrc: 'https://pan.gdy1025.eu.org/d/cdn/pictures/img/top_min.jpg'
    ,
    largeSrc: 'https://pan.gdy1025.eu.org/d/cdn/pictures/img/top.jpg',
    enableRoutes: ['/'],
  };
  if (config.enableRoutes && config.enableRoutes.length > 0) {
    config.enableRoutes.forEach((route) => {
      if (document.location.pathname === route) {
        executeLoad(config);
      }
    });
  } else {
    executeLoad(config);
  }