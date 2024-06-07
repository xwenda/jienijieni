## 用法

1. 在el-select的基础上封的，参数和el-select一模一样，文档直接看element就行，目的是不想写el-option v-for.....，并且支持自己修改下拉列表的样式

   注意：暂时不支持分组结构的下拉

2. v-model改为：value传值，@change函数接收修改的值

3. 新增的传值：

   1. list：就是要渲染的下拉列表
   2. selectKey：对象-{ label: '', value: '' }，传的是label的键名，value的键名，例如你的下拉里面是用enterpriseName作为显示的名字，orgCode作为值，就是传{ label: 'enterpriseName', value: 'orgCode' }，另外default-list已经内置了默认的键，可以直接在上面增加自己想要的，后续会遍历自己加上，需要注意的是，判断的依据是label，所以不要传重复的
   3. dictListAllKey：这个就是我们store里面的字典的名字，例如传了AlarmLevel，就会去取store.getters.dictListAll.AlarmLevel，如果不存在字典，则使用list

4. 默认可搜索，且下拉列表的宽度和下拉框一致

5. 关于样式直接在下拉框上面定义一个class就行了，具体修改样式可以参考x-select/index.less里面的默认样式`default-x-select`，自己复制粘贴过去改

6. 默认的下拉是store.getters.enterpriseList（企业下拉），如果store没有这个，则默认的就是【是、否】下拉



例子：

```js
<x-select
  :value="form.orgCode"
  placeholder="全部企业"
  @change="val => form.orgCode = val"
/>
```

