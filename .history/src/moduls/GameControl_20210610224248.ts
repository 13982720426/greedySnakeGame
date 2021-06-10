import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

//游戏控制器，控制其他所有类
class GameControl {
  //定义三个属性
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }

  //游戏得初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler)
  }
  // //创建一个键盘按下的响应函数
  // keydownHandler(event: KeyboardEvent) {
  //   console.log(event.key)
  // }

  /*
    Chrome       IE
    ArrowUp      Up
    ArrowDown    Down
    ArrowLeft    Left
    ArrowRight   Right
*/

  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    // 需要检查event.key的值是否合法（用户是否按了正确的按键）
    // 修改direction属性
    console.log(event.key)
    // this.direction = event.key;
  }
}

export default GameControl
