import { Select } from 'element-ui';
import store from '@/store';
import './index.less';
import { defaultSelect } from './dafault-list';
export default {
  name: 'X-Select',
  props: Object.assign({}, Select.props, {
    list: { type: Array },
    selectKey: { type: Object },
    size: { type: String, default: 'mini' },
    'popper-append-to-body': { type: Boolean, default: false },
    dictListAllKey: { type: String, default: 'EnterpriseList' }, // 可看 src\config\dict.js
    filterable: { type: Boolean, default: true }
  }),
  data() {
    this.defaultSelect = defaultSelect;
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    defaultKeyByList() {
      let temp;
      if (this.dictListAllKey && store.getters.dictListAll[this.dictListAllKey]) {
        temp = store.getters.dictListAll[this.dictListAllKey][0];
      }
      if (this.list) {
        temp = this.list[0];
      }
      if (!temp) {
        temp = store.getters.enterpriseList?.[0];
      }
      if (!temp) {
        return { label: 'label', value: 'value' };
      }
      for (let i of this.defaultSelect) {
        if (temp.hasOwnProperty(i.label)) {
          return i;
        }
      }
    }
  },
  render() {
    const props = {};
    Object.keys(Select.props).forEach((k) => {
      props[k] = this[k];
      return props[k];
    });
    let { label, value } = this.defaultKeyByList();
    if (this.selectKey && this.selectKey.label) label = this.selectKey.label;
    if (this.selectKey && this.selectKey.value) value = this.selectKey.value;
    let list;
    if (this.dictListAllKey && store.getters.dictListAll[this.dictListAllKey]) {
      list = store.getters.dictListAll[this.dictListAllKey].map((item) => {
        return <el-option label={item[label]} value={item[value]}></el-option>;
      });
    }

    if (this.list) {
      list = this.list.map((item) => {
        return <el-option label={item[label]} value={item[value]}></el-option>;
      });
    }
    if (!list) {
      list = [
        {
          label: '否',
          value: 0
        },
        {
          label: '是',
          value: 1
        }
      ].map((item) => {
        return <el-option label={item[label]} value={item[value]}></el-option>;
      });;
    }

    return (
      <el-select
        class={this.$vnode.data.staticClass ? 'change-position' : 'default-x-select change-position'}
        {...{ props }}
        onChange={(val) => {
          this.$emit('change', val);
        }}
        value={this.value}
      >
        {list}
      </el-select>
    );
  }
};
