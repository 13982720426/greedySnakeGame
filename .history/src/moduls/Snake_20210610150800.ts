class Snake {
  //表示蛇头的元素
  head: HTMLElement

  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection

  constructor() {
    this.head = document.querySelector('#snake > div') as HTMLElement
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
  }
  //获取蛇的坐标(蛇头坐标)
  get X() {
    return this.head.offsetLeft
  }

  // 获取蛇的Y轴坐标
  get Y() {
    return this.head.offsetHeight
  }

  // 设置蛇头的坐标
  set X(value: number) {
    this.head.style.left = value + 'px'
  }
  set Y(value: number) {
    this.head.style.top = value + 'px'
  }
}
