class Snake {
  //表示蛇头的元素
  head: HTMLElement

  constructor() {
    this.head = document.querySelector('#snake > div')!
  }
}
