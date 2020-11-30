// import Button from './components/button'
// import ButtonGroup from './components/button-group'
// import Input from './components/input'
// import Icon from './components/icon'
import Loading from './components/loading'
// import ImgView from './components/img-view'
// import Select from './components/select'
// import SelectGroup from './components/select-group'
// import Option from './components/option'
// import OptionGroup from './components/option-group'
// import Checkbox from './components/checkbox'
// import CheckboxGroup from './components/checkbox-group'

// 组件列表
const components = {
   // Button,
   // ButtonGroup,
   // Input,
   Loading,
   // ImgView,
   // Icon,
   // Select,
   // SelectGroup,
   // Option,
   // OptionGroup,
   // Checkbox,
   // CheckboxGroup
}
// 兼容非template模式 render 与原生元素标签区分
const myView = {
   ...components,
   // mButton: Button,
   // mSelect: Select,
   // mInput: Input,
   // mCheckbox: Checkbox
}
// 定义 install 方法 使用use 则注册所有组件
const install = function(Vue) {
   // 判断是否安装
   if (install.installed) return
   // 遍历注册组件
   Object.keys(myView).forEach(key => {
      // 关于组件命名的方式 是否加上 my- 前缀 还是直接使用 myView 的key做名称 待定
      // 因项目基于iview 所以暂时以key做命名与iview一直 方便在iview基础上进行替换
      Vue.component(key, myView[key])
      // Vue.component(myView[key].name, myView[key])
   })
}

// 直接引入
if (typeof window !== 'undefined' && window.Vue) {
   install(window.Vue)
}

// const API = {
//   version: process.env.VERSION,
//   // 导出的对象必须有install 才可被Vue.use()方法安装
//   install,
//   ...myView
// }
export default {
   version: process.env.VERSION,
   // 导出的对象必须有install 才可被Vue.use()方法安装
   install,
   ...myView
}
// module.exports.default = module.exports = API
