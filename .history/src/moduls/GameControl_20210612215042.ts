import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

//游戏控制器，控制其他所有类
class GameControl {
  //定义三个属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection;
  //获取蛇的容器
  element: HTMLElement;
  //创建一个属性来存储蛇的移动方向（也就是按键的方向）
  direction: string = '';

  //创建一个属性来记录是否结束游戏
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.element = document.getElementById('snake')!;
    this.bodies = this.element.getElementsByTagName('div');
    this.init();
  }

  //游戏得初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));

    // 调用run方法，使蛇移动
    this.run();
  }
  //创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    //需要检查event.key的值是否合法（用户是否按了正确的按键）

    // 修改direction 属性
    this.direction = event.key;
  }

  /*
        Chrome       IE
        ArrowUp      Up
        ArrowDown    Down
        ArrowLeft    Left
        ArrowRight   Right
    */
  // 创建一个控制蛇移动的方法
  run() {
    /**
     * 根据方向（this.direction）来使蛇的位置改变
     *  向上  top 减少
     *  向下  top 增加
     *  向左  left  减少
     *  向右  left  增加
     */

    // 先获取蛇现在坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来修改X值和Y值
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }

    // 检查蛇是否吃到食物
    this.checkEat(X, Y);

    //修改蛇的X和Y的值
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      //进入到catch，说明出现了异常，游戏结束
      alert(e.message + ' GAME OVER！');
      //将isLive设置成false
      this.isLive = false;
    }

    //开启一个定时器
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  // 定义一个方法，检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    //获取所有的身体，检查是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        //撞到身体，游戏结束
        throw new Error('撞到自己了!');
      }
    }

    if (
      //此处有个bug，蛇的X、Y坐标超过50之后，个位数会加1 就变成了51 61 71...，解决办法是四舍五入
      Math.round(X / 10) * 10 === Math.round(this.food.X / 10) * 10 &&
      Math.round(Y / 10) * 10 === Math.round(this.food.Y / 10) * 10
    ) {
      // 食物的位置进行重置
      this.food.change();
      //分数增加
      this.scorePanel.addScore();
      //蛇要增加一节
      this.snake.addBody();
    }
  }
}

export default GameControl;
