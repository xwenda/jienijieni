import{h as i,o as c,c as m,z as n,a as e,E as o,O as r}from"./chunks/framework.1bbcf060.js";const s="/jienijieni/image-20231016172034957.png",y="/jienijieni/image-20231016175446312.png",f="/jienijieni/image-20231016182330145.png",v="/jienijieni/image-20231017171304069.png",F="/jienijieni/image-20231016182453016.png",a={__name:"cloneToClipboard",props:["num"],setup(p){const l=p;let d=i(`<template>
<div>
  <span class="right_top" :style="borderStyle"></span>
  <span class="right_bottom" :style="borderStyle"></span>
  <span class="left_top" :style="borderStyle"></span>
  <span class="left_bottom" :style="borderStyle"></span>
</div>
</template>
<script>
export default {
name: 'BoxCorners',
props: { 
  borderStyle: { type: Object, default: () => ({
    width: '5px',
    height: '6px',
    border: '1px solid rgb(48,170,180)'
  }) }
}
}
<\/script>
<style lang="less">
.right_top, .right_bottom, .left_bottom, .left_top {
  position: absolute;
}
.right_bottom {
  bottom: 0;
  right: 0;
  border-top: none !important;
  border-left: none !important;
}
.right_top {
  top: 0;
  right: 0;
  border-bottom: none !important;
  border-left: none !important;
}
.left_top {
  top: 0;
  left: 0;
  border-bottom: none !important;
  border-right: none !important;
}
.left_bottom {
  bottom: 0;
  left: 0;
  border-top: none !important;
  border-right: none !important;
}
</style>`),u=i(`<template>
<div class="card_box_title" :style="titleBackground">
  <div>
    <img :src="titleIconUrl" alt="" class="title_rectangle" v-if="titleIconUrl !== ''" :style="titleIconStyle">
    <p class="card_box_title_name">{{ title }}</p>
    <slot></slot>
  </div>
  <p 
    @click="moreEvent" 
    class="more" 
    v-if="moreText !== ''" 
    :style="moreStyle"
  >
    {{ moreText }}
    <img :src="iconUrl" alt="" class="more_icon" v-if="renderIcon">
  </p>
  <p 
    @click="moreEvent" 
    :class="titleIconClass" 
    v-if="moreText === '' && titleIconClass" style="cursor:pointer;"
  ></p>
</div>
</template>
<script>
export default {
name: 'BoxTitle',
props: {
  title: { type: String, default: '' },
  moreText: { type: String, default: '' },
  moreStyle: { type: Object, default: () => {} },
  titleBackground: { type: Object, default: () => {} },
  moreEvent: { type: Function, default: () => {} },
  renderIcon: { type: Boolean, default: true },
  iconUrl: { type: String, default: () => require('@/assets/image_2/ams/arrow-right.png') },
  titleIconUrl: { type: String, default: () => require('@/assets/image_2/bms/title.png') },
  titleIconClass: { type: String, default: '' },
  titleIconStyle: { type: Object, default: () => {} },
},
methods: {
}
}
<\/script>
<style lang="less" scoped>
.card_box_title {
width: 100%;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 16px;

> div {
  display: inline-flex;
  align-items: center;
}
.title_rectangle {
  width: 19px;
  height: 19px;
  display: inline-block;
  margin-left: 9px;
}

p {
  display: inline-block;
  color: white;
}

.card_box_title_name {
  margin-left: 9px;
}

.card_box_second_title_name {
  margin-left: 9px;
  width: 126px;
  height: calc(100% - 18px);
  background: rgba(14, 205, 203, 0.3);
  border: 1px solid #0ECDB9;
  line-height: calc(100% - 18px);
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
}

.more {
  cursor: pointer;
  float: right;
  margin-right: 6px;
  font-size: 12px;
  margin-left: 13px;
  font-weight: 400;
  color: #FFFFFF;
}

.more_icon {
  width: 8.2px;
  margin-left: 11px;
}
}
</style>
`),h=i(`<template>
<div class="card-box" :style="{ height, width }">
  <div class="card_title">{{ title }}
    <div class="select_more_text_top">
      <slot name="title">
        {{ moreText }}<img v-if="moreText !== ''" :src="moreIcon" alt="" class="more_icon">
      </slot>
    </div>
  </div>
  <slot>
    <div style="color: white">
      无内容
    </div>
  </slot>
</div>
</template>
<script>
export default {
name: 'Card',
props: {
  title: { type: String, default: '' },
  moreText: { type: String, default: '' },
  height: { type: String, default: '100%' },
  width: { type: String, default: '100%' },
},  
data () {
  return {
    moreIcon: require('@/assets/image_2/ams/arrow-right.png'),
  }
},
}
<\/script>
<style lang="less" scoped>
.card-box {
box-sizing: border-box;
.card_title {
  margin: 0 0 0 0;
  width: 100%;
  background: url('~@/assets/image_2/ams/img_ent_title_2.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  padding: 0 5px 0 30px;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
  color: #FFFFFF;
  font-family: TITLE_4, serif;
  justify-content: space-between;
  line-height: 18px;

.select_more_text_top {
  font-size: 14px;
  line-height: 28px;
  color: #FFFFFF;
  margin-left: 12px;
  cursor: pointer;
  letter-spacing: 2px;
  font-family: Adobe Heiti Std;

  .more_icon {
    width: 11px;
    height: 10px;
    margin-left: 5px;
  }
}
}
}

</style>`),g=i(`<template>
<div class="pie_body" :style="{ width: pieWidth + 'px' }">
  <div ref="pie" class="pie"></div>
  <p :style="{ width: pieWidth + 'px' }">
    <CountTo :startVal='0' :endVal='PIE[0].value' :duration='3000' separator="" style="font-size: 25px;" />
    <span style="margin: 5px 0 0 0">%</span>
  </p>
  <p :style="{ color: titleColor }">{{ title }}</p>
</div>
</template>
<script>
import CountTo from 'vue-count-to'
import * as echarts from 'echarts'
export default {
name: 'PIE',
props: {
  title: { type: String, default: '#919FAD' },
  titleColor: { type: String, default: '测试' },
  data: { type: Number, default: parseInt(Math.random() * 100) },
  color: { type: String, default: '#0CFF00' },
  pieWidth: { type: Number, default: 58 },
},
components: {
  CountTo,
},
data() {
  return {
    PIE: null,
    myChart: null,
  }
},
watch: {
  data: {
    handler(val) {
      this.PIE = [{ value: val, name: this.title }]
      this.drawPIE()
    },
    immediate: true
  }
},
mounted() {
  this.$nextTick(() => {
    this.myChart = echarts.init(this.$refs.pie)
    this.drawPIE()
  })
},
methods: {
  drawPIE() {
    if (!this.myChart) return
    this.myChart.clear()
    this.myChart.setOption(this.option(this.PIE))
  },
  option(data) {
    return {
      polar: { radius: ["100%", "90%"], center: ["50%", "50%"] },
      angleAxis: { clockwise: false, max: 100, show: false, startAngle: 270 },
      radiusAxis: { type: "category", show: true, axisLabel: { show: false }, axisLine: { show: false }, axisTick: { show: false } },
      series: [
        // 外圈
        {
          name: data[0].name,
          data: data.slice(0, 1),
          radius: "100%",
          type: "bar",
          roundCap: true,
          barWidth: 16,
          showBackground: true,
          backgroundStyle: { color: "transparent" },
          coordinateSystem: "polar",
          itemStyle: { normal: { color: this.color } },
        },
        {
          data: [{ show: false, value: "100" }], //作用不清楚
          name: "灰色内圈", //刻度背景
          type: "gauge",
          radius: "100%",
          startAngle: "0",
          endAngle: "-359.99",
          axisLine: { lineStyle: { color: [[1, "rgb(45,63,104)"]], width: 1, opacity: 1 } },
          splitLine: { show: false },
          axisLabel: { show: false },
          pointer: { show: false },
          axisTick: { show: false },
          detail: { show: 0 },
        },
      ],
    }
  }
}
}
<\/script>
<style lang="less" scoped>
.pie_body {
text-align: center;
color: white;
margin: 0 14px 0px 10px;
position: relative;

>div {
  display: inline-block;
  width: 58px;
  height: 58px;
  border: 1px solid #2D3F68;
  border-radius: 50%;
  margin-top: 20px;
  position: relative;
  z-index: 999;
}

>p:first-of-type {
  position: absolute;
  top: 16px;
  left: 0;
  height: 60px;
  font-size: 15px;
  font-family: TITLE_6;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
}

>p {
  margin-top: 5px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #919FAD;
}
}
</style>`),x=i(`<template>
<div class="box_body">
  <div class="box_body_table_head">
    <p v-for="item, index in titleList" :key="index" :style="item.style">{{ item.name }}</p>
  </div>
  <div
    class="box_body_table_body"
    v-loading="box_body_refresh"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.2)"
   >
    <vueSeamlessScroll
      :data="data"
      :class-option="defaultOption"
      class="box_body_table_body_scroll"
      :style="{ height: height + 'px' }"
      ref="vueSeamlessScrollLeft"
      @ScrollEnd="refreshData"
    >
      <div class="box_body_table_body_scroll_body" v-for="(item, index) in data" :key="index">
        <div v-for="itemm, indexx in titleList" :key="indexx" :style="itemm.style" :title="item[itemm.prop]">
          <slot :data="item[itemm.prop]" :name="itemm.prop">
            {{ item[itemm.prop] }}
          </slot>
        </div>
      </div>
    </vueSeamlessScroll>
  </div>
</div>
</template>
<script>
const defaultList = [
{ name: '测试', prop: 'test1', style: 'flex: 1;text-align: center;' },
{ name: '测试2', prop: 'test2', style: 'flex: 1;text-align: center;' },
{ name: '测试3', prop: 'test3', style: 'flex: 1;text-align: center;' },
{ name: '测试4', prop: 'test4', style: 'flex: 1;text-align: center;' },
{ name: '测试5', prop: 'test5', style: 'flex: 1;text-align: center;' },
{ name: '测试6', prop: 'test6', style: 'flex: 1;text-align: center;' },
]
const defaultData = []

for (let i = 0;i <= 30; i++) {
defaultData.push({
  test1: parseInt(Math.random() * 100),
  test2: parseInt(Math.random() * 100),
  test3: parseInt(Math.random() * 100),
  test4: parseInt(Math.random() * 100),
  test5: parseInt(Math.random() * 100),
  test6: parseInt(Math.random() * 100),
})
}
import VueSeamlessScroll from 'vue-seamless-scroll'
export default {
name: '',
props: {
  height: { type: Number, default: 156 },
  titleList: { type: Array, default: () => defaultList },
  data: { type: Array, default: () => defaultData },
  refreshFun: { type: Function, default: () => {} },
},
components: {
  VueSeamlessScroll,
},
data() {
  return {
    box_body_refresh: false,
    defaultOption: {
      step: 0.5,            // 数值越大速度滚动越快
      limitMoveNum: 3,      // 开始无缝滚动的数据量
      hoverStop: true,      // 是否开启鼠标悬停stop
      direction: 1,         // 0向下 1向上 2向左 3向右
      openWatch: true,      // 开启数据实时监控刷新dom
      singleHeight: 0,      // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
      singleWidth: 0,       // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
    },
  }
},
computed: {

},
methods: {
  async refreshData() {
    this.box_body_refresh = true
    await this.refreshFun()
    this.box_body_refresh = false
  }
},
watch: {

},
created() {

},
mounted() {

},
beforeDestroy() {
  
}
}
<\/script>
<style lang="less" scoped>
.box_body {
height: 100%;
.box_body_table_head {
  height: 40px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 40px;
  color: #5FD4FF;
  display: flex;

  > p {
    display: inline-block;
  }
}

.box_body_table_body {
  .box_body_table_body_scroll {
    overflow: hidden;

    .box_body_table_body_scroll_body {
      border-left: 1px solid rgba(48,170,180,0.5);
      display: flex;
      align-items: center;
      line-height: 26px;
      margin-top: 5px;
      &:hover {
        border: 1px solid #00f9ff;
      }

      .warn_box {
        width: 70px;
        text-align: center;
        background: rgba(0,144,255,0.43);
        border: 1px solid #0090FF;
        border-radius: 2px;
        box-sizing: border-box;
        line-height: 17px;
        height: 20px;
      }
      > div {
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: white;
        height: 26px;
        display: inline-block;
        font-size: 12px;
      }
      &:nth-child(odd) {
        background: rgb(2, 20, 32);
        border-left: 1px solid #30AAB4;
      }
    }
  }
}
}
</style>`),_=i(`<template>
<div class="otherPie" :style="{ width: (placement === 'right' ? 2 * pieWidth : pieWidth) + 'px' }" :class="{ placement: placement === 'right' }">
  <div :style="{ borderColor: borderColor }">
    <CountTo :startVal='0' :endVal='data' :duration='3000' separator="" />
  </div>
  <p :style="{ color: color, margin: placement === 'right' ? '20px 0 0 10px' : '5px 0 0' }" >{{ name }}</p>
</div>
</template>
<script>
import CountTo from 'vue-count-to'
export default {
name: 'SumPie',
props: {
  data: { type: Number, default: 0 },
  name: { type: String, default: '测试测试' },
  borderColor: { type: String, default: '#2D3F68' },
  color: { type: String, default: 'white' },
  pieWidth: { type: Number, default: 61 },
  placement: { type: String, default: 'top' },
},
components: {
  CountTo
},
data() {
  return {
    
  }
},
computed: {

},
methods: {

},
watch: {

},
created() {

},
mounted() {

},
beforeDestroy() {
  
}
}
<\/script>
<style lang="less" scoped>
.otherPie {
display: inline-block;
text-align: center;
color: white;
margin: 0 14px 0px 10px;
position: relative;
> div {
  margin-top: 20px;
  width: 53px;
  height: 53px;
  border: 4px solid #2D3F68;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  z-index: 999;
  cursor: pointer;
  &:hover {
    transform: scale(0.92);
  }
  > span {
    display: flex;
    width: 53px;
    height: 53px;
    position: absolute;
    font-size: 25px;
    font-family: TITLE_6;
    color: white;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  }
}
> p {
  display: inline-block;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: white;
}
}
.placement {
display: inline-flex;
align-items: center;
}
</style>`);function b(){let t="";l.num===1?t=d.value:l.num===2?t=u.value:l.num===3?t=h.value:l.num===4?t=g.value:l.num===5?t=x.value:l.num===6&&(t=_.value),navigator.clipboard.writeText(t)}return(t,q)=>(c(),m("div",{onClick:b,style:{cursor:"pointer",display:"inline-block","font-size":"14px",color:"skyblue",outline:"lightblue"}}," 复制代码 "))}},S=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"提示"),n("p",null,"参数只要没写必选的，均为可选")],-1),w={id:"boxcorners",tabindex:"-1"},T=n("a",{class:"header-anchor",href:"#boxcorners","aria-label":'Permalink to "BoxCorners <cloneToClipboard :num="1" />"'},"​",-1),C=n("p",null,[n("img",{src:s,alt:"image-20231016172034957"})],-1),D=n("p",null,"盒子的四个角标，参数：",-1),k=n("ul",null,[n("li",null,[e("borderStyle(Object6)： "),n("ul",null,[n("li",null,"长"),n("li",null,"宽"),n("li",null,"边框样式"),n("li",null,[e("参考默认值："),n("code",null,"{ width: '5px', height: '6px', border: '1px solid rgb(48,170,180)' }")])])])],-1),I={id:"boxtitie",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#boxtitie","aria-label":'Permalink to "BoxTitie <cloneToClipboard :num="2" />"'},"​",-1),E=r("",3),P={id:"pie",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#pie","aria-label":'Permalink to "pie <cloneToClipboard :num="4" />"'},"​",-1),z=r("",3),B={id:"scrolllist",tabindex:"-1"},N=n("a",{class:"header-anchor",href:"#scrolllist","aria-label":'Permalink to "ScrollList <cloneToClipboard :num="5" />"'},"​",-1),L=r("",5),V={id:"sumpie",tabindex:"-1"},O=n("a",{class:"header-anchor",href:"#sumpie","aria-label":'Permalink to "SumPie <cloneToClipboard :num="6" />"'},"​",-1),M=r("",10),H=JSON.parse('{"title":"BoxCorners","description":"","frontmatter":{"typora-root-url":".\\\\public","typora-copy-images-to":".\\\\public"},"headers":[],"relativePath":"business/modules组件说明.md"}'),W={name:"business/modules组件说明.md"},R=Object.assign(W,{setup(p){return(l,d)=>(c(),m("div",null,[S,n("h1",w,[e("BoxCorners "),o(a,{num:1}),e(),T]),C,D,k,n("h1",I,[e("BoxTitie "),o(a,{num:2}),e(),A]),E,n("h1",P,[e("pie "),o(a,{num:4}),e(),j]),z,n("h1",B,[e("ScrollList "),o(a,{num:5}),e(),N]),L,n("h1",V,[e("SumPie "),o(a,{num:6}),e(),O]),M]))}});export{H as __pageData,R as default};
