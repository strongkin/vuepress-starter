(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1177:function(t,v,_){"use strict";_.r(v);var a=_(1),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"组件的生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的生命周期"}},[t._v("#")]),t._v(" 组件的生命周期")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("ul",[v("li",[t._v("意义：组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分析组件错误原因等")]),t._v(" "),v("li",[t._v("组件的生命周期：组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程")]),t._v(" "),v("li",[t._v("钩子函数的作用：为开发人员在不同阶段操作组件提供了时机。")]),t._v(" "),v("li",[v("strong",[t._v("只有 类组件 才有生命周期。")])])]),t._v(" "),v("h2",{attrs:{id:"生命周期的整体说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期的整体说明"}},[t._v("#")]),t._v(" 生命周期的整体说明")]),t._v(" "),v("ul",[v("li",[t._v("每个阶段的执行时机")]),t._v(" "),v("li",[t._v("每个阶段钩子函数的执行顺序")]),t._v(" "),v("li",[t._v("每个阶段钩子函数的作用")]),t._v(" "),v("li",[v("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"),v("OutboundLink")],1)])]),t._v(" "),v("p",[v("img",{attrs:{src:_(798),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"挂载阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#挂载阶段"}},[t._v("#")]),t._v(" 挂载阶段")]),t._v(" "),v("p",[t._v("执行时机：组件创建时（页面加载时）")]),t._v(" "),v("p",[t._v("执行顺序：")]),t._v(" "),v("p",[v("img",{attrs:{src:_(799),alt:""}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("钩子 函数")]),t._v(" "),v("th",[t._v("触发时机")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("constructor")]),t._v(" "),v("td",[t._v("创建组件时，最先执行")]),t._v(" "),v("td",[t._v("1. 初始化state  2. 创建Ref等")])]),t._v(" "),v("tr",[v("td",[t._v("render")]),t._v(" "),v("td",[t._v("每次组件渲染都会触发")]),t._v(" "),v("td",[t._v("渲染UI（"),v("strong",[t._v("注意： 不能调用setState()")]),t._v(" ）")])]),t._v(" "),v("tr",[v("td",[t._v("componentDidMount")]),t._v(" "),v("td",[t._v("组件挂载（完成DOM渲染）后")]),t._v(" "),v("td",[t._v("1. 发送网络请求   2.DOM操作")])])])]),t._v(" "),v("h2",{attrs:{id:"更新阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段"}},[t._v("#")]),t._v(" 更新阶段")]),t._v(" "),v("ul",[v("li",[t._v("执行时机：1. setState() 2. forceUpdate() 3. 组件接收到新的props")]),t._v(" "),v("li",[t._v("说明：以上三者任意一种变化，组件就会重新渲染")]),t._v(" "),v("li",[t._v("执行顺序")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(800),alt:""}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("钩子函数")]),t._v(" "),v("th",[t._v("触发时机")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("render")]),t._v(" "),v("td",[t._v("每次组件渲染都会触发")]),t._v(" "),v("td",[t._v("渲染UI（与 挂载阶段 是同一个render）")])]),t._v(" "),v("tr",[v("td",[t._v("componentDidUpdate")]),t._v(" "),v("td",[t._v("组件更新（完成DOM渲染）后")]),t._v(" "),v("td",[t._v("DOM操作，可以获取到更新后的DOM内容，不要调用setState")])])])]),t._v(" "),v("h2",{attrs:{id:"卸载阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#卸载阶段"}},[t._v("#")]),t._v(" 卸载阶段")]),t._v(" "),v("ul",[v("li",[t._v("执行时机：组件从页面中消失")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("钩子函数")]),t._v(" "),v("th",[t._v("触发时机")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("componentWillUnmount")]),t._v(" "),v("td",[t._v("组件卸载（从页面中消失）")]),t._v(" "),v("td",[t._v("执行清理工作（比如：清理定时器等）")])])])]),t._v(" "),v("h1",{attrs:{id:"todomvc案例优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#todomvc案例优化"}},[t._v("#")]),t._v(" todomvc案例优化")])])}),[],!1,null,null,null);v.default=e.exports},798:function(t,v,_){t.exports=_.p+"assets/img/left.f8899e44.png"},799:function(t,v,_){t.exports=_.p+"assets/img/componentleft.16b586eb.png"},800:function(t,v,_){t.exports=_.p+"assets/img/update.c78eb0a8.png"}}]);