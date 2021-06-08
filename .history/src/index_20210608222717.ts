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
    //食物的位置最小，最大290，并且是整数
    this.element.style.left = '0'
    this.element.style.top = '0'
  }
}

const food = new Food()
console.log(food.X, food.Y)
food.change()
console.log(food.X, food.Y)
