(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1019:function(t,s,a){t.exports=a.p+"assets/img/HOC.7d421fc1.png"},1483:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mixins-已废弃"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixins-已废弃"}},[t._v("#")]),t._v(" mixins（已废弃）")]),t._v(" "),s("blockquote",[s("p",[t._v("https://react.docschina.org/blog/2016/07/13/mixins-considered-harmful.html")])]),t._v(" "),s("ul",[s("li",[t._v("mixin引入了隐式依赖关系\n"),s("ul",[s("li",[t._v("对于组件中的方法和数据的来源不明确，不容易维护")])])]),t._v(" "),s("li",[t._v("Mixins 导致名称冲突")]),t._v(" "),s("li",[t._v("Mixins 导致滚雪球般的复杂性")])]),t._v(" "),s("h1",{attrs:{id:"render-props技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render-props技术"}},[t._v("#")]),t._v(" render-props技术")]),t._v(" "),s("h2",{attrs:{id:"组件复用的说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件复用的说明"}},[t._v("#")]),t._v(" 组件复用的说明")]),t._v(" "),s("ul",[s("li",[t._v("思考：如果两个组件中的部分功能相似或相同，该如何处理？")]),t._v(" "),s("li",[t._v("处理方式：复用相似的功能（联想函数封装）")]),t._v(" "),s("li",[t._v("复用什么？1. state 2. 操作state的方法   "),s("strong",[t._v("复用组件的状态和组件的逻辑，组件的UI不一样")])]),t._v(" "),s("li",[t._v("两种解决方案\n"),s("ul",[s("li",[t._v("render-props")]),t._v(" "),s("li",[t._v("HOC（高阶组件）")]),t._v(" "),s("li",[t._v("hooks")])])]),t._v(" "),s("li",[t._v("注意：这两种方式不是新的API，而是利用React自身特点的编码技巧，演化而成的固定模式（写法）")])]),t._v(" "),s("h2",{attrs:{id:"render-props基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render-props基本使用"}},[t._v("#")]),t._v(" render-props基本使用")]),t._v(" "),s("ul",[s("li",[t._v("思路：将要复用的state和操作state的方法封装到一个组件中")]),t._v(" "),s("li",[t._v("问题：渲染的UI内容不一样，该怎么办")]),t._v(" "),s("li",[s("strong",[t._v("在使用组件时，添加一个值为函数的prop，通常把这个prop命名为render，在组件内部调用这个函数。传进来的函数负责渲染UI")])]),t._v(" "),s("li",[t._v("问题2：如果获取组件内部的状态")]),t._v(" "),s("li",[s("strong",[t._v("在组件内部调用方法的时候，把状态当成参数进行传递")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mouse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// … 省略state和操作state的方法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Mouse render"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mouse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("鼠标当前位置 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"children代替render属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#children代替render属性"}},[t._v("#")]),t._v(" children代替render属性")]),t._v(" "),s("ul",[s("li",[t._v("注意：并不是该模式叫 render props 就必须使用名为render的prop，实际上可以使用任意名称的prop")]),t._v(" "),s("li",[t._v("把prop是一个函数并且告诉组件要渲染什么内容的技术叫做：render props模式")]),t._v(" "),s("li",[t._v("推荐：使用 children 代替 render 属性")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Mouse"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("鼠标的位置是 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Mouse"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件内部：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Context 中的用法：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Consumer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("data参数表示接收到的数据 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Consumer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"render-props优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render-props优化"}},[t._v("#")]),t._v(" render-props优化")]),t._v(" "),s("ul",[s("li",[t._v("推荐：给 render props 模式添加 props校验")]),t._v(" "),s("li",[t._v("应该在组件卸载时解除 mousemove 事件绑定")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Mouse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("chidlren")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleMouseMove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("封装一个组件，用于提取公共的状态和逻辑，比如鼠标的位置以及鼠标位置的更新，渲染的内容是不确定的，让组件接受一个叫children的prop，而且children必须是一个函数")]),t._v(" "),s("h1",{attrs:{id:"高阶组件-hoc-higher-order-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件-hoc-higher-order-component"}},[t._v("#")]),t._v(" 高阶组件  HOC higher order component")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("ul",[s("li",[t._v("目的：实现状态逻辑复用   增强一个组件的能力")]),t._v(" "),s("li",[t._v("采用 包装（装饰）模式 ，比如说：手机壳")]),t._v(" "),s("li",[t._v("手机：获取保护功能")]),t._v(" "),s("li",[t._v("手机壳 ：提供保护功能")]),t._v(" "),s("li",[t._v("高阶组件就相当于手机壳，通过包装组件，增强组件功能")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1019),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"思路分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),s("ul",[s("li",[t._v("高阶组件（HOC，Higher-Order Component）是一个函数，接收要包装的组件，返回增强后的组件")]),t._v(" "),s("li",[t._v("高阶组件的命名： "),s("code",[t._v("withMouse")]),t._v(" "),s("code",[t._v("withRouter")]),t._v(" "),s("code",[t._v("withXXX")])]),t._v(" "),s("li",[t._v("高阶组件内部创建一个类组件，在这个类组件中提供复用的状态逻辑代码，通过prop将复用的状态传递给\n被包装组件")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CatWithMouse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMouse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Cat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PositionWithMOuse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMouse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 高阶组件内部创建的类组件：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("WithMouse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Base")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mouse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理鼠标的位置等操作")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Base "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Mouse\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[t._v("#")]),t._v(" 使用步骤")]),t._v(" "),s("ul",[s("li",[t._v("创建一个函数，名称约定以 with 开头")]),t._v(" "),s("li",[t._v("指定函数参数（作为要增强的组件）  传入的组件只能渲染基本的UI")]),t._v(" "),s("li",[t._v("在函数内部创建一个类组件，"),s("strong",[t._v("提供复用的状态逻辑代码")]),t._v("，并返回")]),t._v(" "),s("li",[t._v("在内部创建的组件的render中，需要渲染传入的基本组件，增强功能，通过props的方式给基本组件传值")]),t._v(" "),s("li",[t._v("调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件，并将其渲染到页面中")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MousePosition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMouse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MousePosition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"传递props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传递props"}},[t._v("#")]),t._v(" 传递props")]),t._v(" "),s("ul",[s("li",[t._v("问题：props丢失")]),t._v(" "),s("li",[t._v("原因：高阶组件没有往下传递props")]),t._v(" "),s("li",[t._v("解决方式：渲染 WrappedComponent 时，将 state 和 this.props 一起传递给组件")]),t._v(" "),s("li",[t._v("传递方式：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WrappedComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h1",{attrs:{id:"hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" hooks")])])}),[],!1,null,null,null);s.default=r.exports}}]);