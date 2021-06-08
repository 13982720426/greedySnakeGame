import './style/index.less'

//定义食物类
class Food {
  // 定义一个属性表示食物所对应的元素
  element:HTMLElement;
  constructor() {
    //获取页面中的food元素并将其赋值给element
    this.element=document.getElementById(this.element:'food')!;
  }
  // 定义一个获取食物x轴坐标的方法
  get X(){
    return this.element.offsetLeft
  }


}