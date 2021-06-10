import './style/index.less'

import Food from './moduls/Food'
import ScorePanel from './moduls/ScorePanel'

const food = new Food()
console.log(food.X, food.Y)
food.change()
console.log(food.X, food.Y)

const scorePanel = new ScorePanel(200, 2)
for (let i = 0; i < 200; i++) {
  scorePanel.addScore()
}
