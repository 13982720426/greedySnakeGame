class Snake {
  //表示蛇头的元素
  head: HTMLElement

  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection

  constructor() {
    this.head = document.querySelector('#snake > div') as HTMLElement
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
  }
}
