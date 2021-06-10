import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

//游戏控制器，控制其他所有类
class GameControl {
  //定义三个属性
  snake: Snake
  food: Food
  scorelPanel: ScorePanel
  sonstructor() {
    this.snake = new Snake()
  }
}

export default GameControl
