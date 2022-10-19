(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1886:function(e,t,r){"use strict";r.r(t);var n=r(1),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"组件化开发使用-react-redux-的新特性-useselector-usedispatch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件化开发使用-react-redux-的新特性-useselector-usedispatch"}},[e._v("#")]),e._v(" 组件化开发使用 react-redux 的新特性 useSelector, useDispatch")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Provider } from 'react-redux';// 引入Provider\nimport store from './store'// 引入store\nimport App from './App';\nimport reportWebVitals from './reportWebVitals';\nReactDOM.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>,\n  document.getElementById(\"root\")\n)\n")])])]),t("p",[e._v("在 reducer 文件夹下创建 counter.js 文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const counter = (state = 0, action) => {\n  console.log("counter reducer")\n  switch (action.type) {\n    case types.INCREMENT:\n      return state + action.payload\n    case types.DECREMENT:\n      return state - action.payload\n    default:\n      return state\n  }\n}\nexport default counter\n')])])]),t("p",[e._v("在 reducer 下创建 index.js 文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { combineReducers } from "redux"\n\n\nimport counter from "./count"\n\nconst rootReducer = combineReducers({\n  counts:counter\n})\n\nexport default rootReducer\n')])])]),t("p",[e._v("在 store 文件夹下建立 index.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { createStore } from "redux"\nimport rootReducer from "./reducer/index"\nconst store = createStore(\n  rootReducer,\n)\nexport default store\n')])])]),t("p",[e._v("在 actions 文件夹下创建 counter.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import * as types from "../actionTypes"\n\nexport const increment = (payload) => {\n  return { type: types.INCREMENT, payload }\n}\nexport const decrement = (payload) => {\n  return { type: types.DECREMENT, payload }\n}\n')])])]),t("p",[e._v("在 actionTypes 文件夹下创建 index.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const INCREMENT = 'counter/increment'\nconst DECREMENT = 'counter/decrement'\nexport { INCREMENT, DECREMENT }\n")])])]),t("p",[e._v("在 app 组件中引入 useSelector, useDispatch 和 increment,decrement")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 从react-redux引入useSelector, useDispatch\nimport { useSelector, useDispatch } from 'react-redux';\nimport { increment,decrement } from './store/actions/counter';\n\nconst App = () => {\n  const count = useSelector((state) => state.counts)\n  const dispatch = useDispatch()\n  return (\n    <div>\n      <h1>{count}</h1>\n      <button onClick={() => dispatch(increment(2))}>加法</button>\n      <button onClick={()=>dispatch(decrement(5))}>减法</button>\n    </div>\n  )\n}\nexport default App\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);