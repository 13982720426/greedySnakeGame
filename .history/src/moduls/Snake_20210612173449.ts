class Snake {
  //表示蛇头的元素
  head: HTMLElement;

  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection;
  //获取蛇的容器
  element: HTMLElement;

  constructor() {
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.element = document.getElementById('snake')!;
    this.bodies = this.element.getElementsByTagName('div');
  }
  //获取蛇的坐标(蛇头坐标)
  get X() {
    return this.head.offsetLeft;
  }

  // 获取蛇的Y轴坐标
  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头的坐标
  set X(value: number) {
    //如果新值和旧值相同，则不修改
    if (this.X === value) {
      return;
    }
    //X的值的合法范围0-290
    if (value < 0 || value >= 300) {
      //进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
      //修改X时,是修改水平坐标，蛇在左右移动，蛇不能掉头
      if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
        console.log('水平反方向发生了掉头');
      }
    }
    this.moveBody();

    this.head.style.left = value + 'px';
  }
  set Y(value: number) {
    //如果新值和旧值相同，则不修改
    if (this.Y === value) {
      return;
    }
    //Y的值的合法范围0-290
    if (value < 0 || value >= 300) {
      //进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
    }

    // console.log(this.bodies[1], Math.round(value / 10) * 10);

    this.moveBody();

    this.head.style.top = value + 'px';
  }

  // 蛇增加身体的方法
  addBody() {
    //向element中添加一个div
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }
  //添加一个蛇身体移动的方法
  moveBody() {
    /**
     * 将后边的身体设置为前边身体的位置
     * 比如：
     *    第三节=>第二节的位置
     *    第二节=>蛇头的位置
     *
     */
    //遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //获取前边身体的值
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      //将值设置到当前身体上

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
}
export default Snake;
