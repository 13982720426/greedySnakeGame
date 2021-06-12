//定义食物类
class Food {
  // 定义一个属性表示食物所对应的元素
  private element: HTMLElement;

  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection;

  constructor() {
    // 获取页面中的food元素并将其赋值给element
    // 末尾加上叹号，表示id为food的元素必定存在（非空）
    this.element = document.getElementById('food')!;

    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物的位置最小，最大290，并且是整数10
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10

    //获取所有的身体，在非身体部分生成食物
    for (let i = 0; i < this.bodies.length; i++) {
      let left = Math.round(Math.random() * 29) * 10;
      let top = Math.round(Math.random() * 29) * 10;
      let bd = this.bodies[i] as HTMLElement;
      //随机生成的位置不能和身体重合
      if (left !== bd.offsetLeft && top !== bd.offsetTop) {
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
      }
    }

    // let left = Math.round(Math.random() * 29) * 10;
    // let top = Math.round(Math.random() * 29) * 10;

    // this.element.style.left = left + 'px';
    // this.element.style.top = top + 'px';
  }
}

// 测试代码
// const food = new Food()
// console.log(food.X, food.Y)
// food.change()
// console.log(food.X, food.Y)

export default Food;
