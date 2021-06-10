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
    let _this = this
  }

  //游戏得初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    // document.addEventListener('keydown', this.keydownHandler.bind(this))
    document.addEventListener('keydown', _this.keydownHandler)
  }
  //创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    console.log(this)

    // 修改direction 属性
    this.direction = event.key
  }
}

export default GameControl
