---
typora-root-url: .\public
typora-copy-images-to: .\public
---

<!-- <script setup>
import cloneToClipboard from './components/cloneToClipboard.vue'
</script> -->

::: tip 提示

参数只要没写必选的，均为可选

:::



# BoxCorners <cloneToClipboard :num="1" />

![image-20231016172034957](/image-20231016172034957.png)

盒子的四个角标，参数：

- borderStyle(Object6)：
  - 长
  - 宽
  - 边框样式
  - 参考默认值：`{ width: '5px', height: '6px', border: '1px solid rgb(48,170,180)' }`

# BoxTitie <cloneToClipboard :num="2" />

![image-20231016172044477](/image-20231016172034957.png)

盒子标题，参数:

- title(String)：
  
  - 标题名字
  
- moreText(String)：
  - 标题右侧文字(如上图`共32条记录` )
  - **空字符串**或者**不传**时，**不渲染**
  
- moreStyle(Object):
  - 标题右侧文字的样式，一般用来调颜色
  - 例如 `{ color: 'red' }`
  
- titleBackground(Object)：
  - 标题总体的样式，一般用来调整背景颜色和高度

  - 例如 `{ line-height:  '30px', background: 'rgba(123,123,123, 0.2)'}`

  - 需要传图片当背景，这样传：

    ```js
    { 'line-height': '34px', background: `url(${require('@/assets/image_2/DualPreventive/Dialog2.png')})` }
    ```

- moreEvent(Function)
  
  - 点击`标题右侧文字`触发的事件
  
- renderIcon(Boolean)
  
  - 是否渲染标题左侧的图标
  
- titleIconUrl(string)
  - 标题左侧的图标地址
  - 默认：`require('@/assets/image_2/ams/arrow-right.png')`
  
- iconUrl(String)
  - 标题右侧文字右侧的图标地址
  - 默认 ：`require('@/assets/image_2/bms/title.png')`

- titleIconClass(String)需要补充说明

- titleIconStyle(Object)
  
  - 标题左侧图标的样式

# pie <cloneToClipboard :num="4" />

![image-20231016175446312](/image-20231016175446312.png)

饼图组件，参数：

- title(String)
  - 标题
- data(Number)
  - 数值
- color(String)
  - 颜色
- titleColor(String)
  - 调整下方字体颜色
- pieWidth(Number)
  - 调整图形整体宽度，用于拉宽下方字体显示的宽度

# ScrollList <cloneToClipboard :num="5" />

![image-20231016172044477](/image-20231016172034957.png)

滚动列表，参数：

- height(String)：
  - 执行滚动的高度

- titleList(Array)：
  - 数组，子项包含`列名`，`列的样式`,`每一列的值对应的字段名`
  - `{ name: '测试', prop: 'test1', style: 'flex: 1;text-align: center;' }`
- data(Array):
  - 数据，其中字段和titleList的prop的字段相对应
- refreshFun(Function):
  - 刷新函数，用于**@ScrollEnd**的分页刷新

另外：

循环中包含了每一列每个空格的插槽，使用每个插槽的插槽名都和**titleList**的prop对应

# SumPie <cloneToClipboard :num="6" />

![image-20231016182330145](/image-20231016182330145.png)

![image-20231017171304069](/image-20231017171304069.png)

合计圆，参数

- data(Number)
  - 数值
- name(String)
  - 名称
- borderColor(String)
  - 圆圈颜色
- color
  - 名称颜色
- placement(String)
  - 控制文字在图形的方向，只有`bottom`和`right`可选

# Tool

![image-20231016182453016](/image-20231016182453016.png)

工具栏，参数：

- bottom(Number)
  - 设置底部距离
- right(Number)
  - 设置右侧距离

另外：

插槽位于**指南针**以及**+**两个按钮之间，可使用地图类型的值currentMap

