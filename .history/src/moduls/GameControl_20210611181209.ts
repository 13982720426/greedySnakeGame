import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

//游戏控制器，控制其他所有类
class GameControl {
  //定义三个属性
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  //创建一个属性来存储蛇的移动方向（也就是按键的方向）
  direction: string = ''

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }

  //游戏得初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
  }
  //创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    //需要检查event.key的值是否合法（用户是否按了正确的按键）

    // 修改direction 属性
    this.direction = event.key
  }

  // 创建一个控制蛇移动的方法
  run{
    /**
     * 根据方向（this.direction）来使蛇的位置改变
     *  向上  top 减少
     *  向下  top 增加
     *  向左  left  减少
     *  向右  left  增加 
     */
  }



}

export default GameControl
