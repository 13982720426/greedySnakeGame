import './style/index.less'

import Food from './moduls/Food'
import ScorePanel from './moduls/ScorePanel'

const food = new Food()
console.log(food.X, food.Y)
food.change()
console.log(food.X, food.Y)
