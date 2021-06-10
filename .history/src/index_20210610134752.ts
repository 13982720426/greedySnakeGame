import './style/index.less'

//定义食物类
class Food {
  // 定义一个属性表示食物所对应的元素
  private element: HTMLElement

  constructor() {
    // 获取页面中的food元素并将其赋值给element
    // 末尾加上叹号，表示id为food的元素必定存在（非空）
    this.element = document.getElementById('food')!
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物的位置最小，最大290，并且是整数10
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
    let left = Math.round(Math.random() * 29) * 10
    let top = Math.round(Math.random() * 29) * 10

    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

// 测试代码
// const food =  new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

// 定义记分牌的类
class ScorePanel {
  //score 和level用来记录分数和等级
  score = 0
  level = 1
  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement

  //设置一个变量限制等级
  maxLevel: number

  constructor() {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
  }

  //设置一个加分的方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
  }

  //提升等级的方法
  levelUp() {
    if (this.level < 10) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

const scorePanel = new ScorePanel()

scorePanel.addScore()
scorePanel.addScore()
