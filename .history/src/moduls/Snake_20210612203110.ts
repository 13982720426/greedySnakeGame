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
    // if (value < 0 || value >= 300) {
    //   //进入判断说明蛇撞墙了
    //   throw new Error('蛇撞墙了！');
    // }
    if (value < 0) {
      value = 290;
      console.log('到左了');
    }
    if (value >= 300) {
      value = 0;
      console.log('到右了');
    }

    //修改X时,是修改水平坐标，蛇在左右移动，蛇不能掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      //如果发生了掉头，让蛇反向继续移动
      if (value !== 0 && value !== 290) {
        if (value > this.X) {
          //如果新值value大于旧X，则说明蛇正在向右走，此时发生掉头，应该使蛇继续向左移动
          value = this.X - 10;
        } else {
          //向左走
          value = this.X + 10;
        }
      }
    }
    this.moveBody();

    this.head.style.left = value + 'px';
    //检查有没有撞到自己
    this.checkHeadBody();
  }
  set Y(value: number) {
    //如果新值和旧值相同，则不修改
    if (this.Y === value) {
      return;
    }
    //Y的值的合法范围0-290
    // if (value < 0 || value >= 300) {
    //   //进入判断说明蛇撞墙了
    //   throw new Error('蛇撞墙了！');
    // }
    if (value < 0) {
      value = 290;
      console.log('到顶了');
    }
    if (value >= 300) {
      value = 0;
      console.log('到底了');
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      //如果发生了掉头，让蛇反向继续移动
      if (value > this.Y) {
        //如果新值value大于旧X，则说明蛇正在向右走，此时发生掉头，应该使蛇继续向左移动
        value = this.Y - 10;
      } else {
        //向左走
        value = this.Y + 10;
      }
    }

    this.moveBody();

    this.head.style.top = value + 'px';
    //检查有没有撞到自己
    this.checkHeadBody();
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
  //检查有没有撞到自己
  checkHeadBody() {
    //获取所有的身体，检查是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        //撞到身体，游戏结束
        throw new Error('撞到自己了!');
      }
    }
  }
}
export default Snake;
