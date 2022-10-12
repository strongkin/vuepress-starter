# 组件化开发使用 react-redux 的新特性 useSelector, useDispatch

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';// 引入Provider
import store from './store'// 引入store
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
```

在 reducer 文件夹下创建 counter.js 文件

```
const counter = (state = 0, action) => {
  console.log("counter reducer")
  switch (action.type) {
    case types.INCREMENT:
      return state + action.payload
    case types.DECREMENT:
      return state - action.payload
    default:
      return state
  }
}
export default counter
```

在 reducer 下创建 index.js 文件

```
import { combineReducers } from "redux"


import counter from "./count"

const rootReducer = combineReducers({
  counts:counter
})

export default rootReducer
```

在 store 文件夹下建立 index.js

```
import { createStore } from "redux"
import rootReducer from "./reducer/index"
const store = createStore(
  rootReducer,
)
export default store
```

在 actions 文件夹下创建 counter.js

```
import * as types from "../actionTypes"

export const increment = (payload) => {
  return { type: types.INCREMENT, payload }
}
export const decrement = (payload) => {
  return { type: types.DECREMENT, payload }
}
```

在 actionTypes 文件夹下创建 index.js

```
const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
export { INCREMENT, DECREMENT }
```

在 app 组件中引入 useSelector, useDispatch 和 increment,decrement

```
// 从react-redux引入useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './store/actions/counter';

const App = () => {
  const count = useSelector((state) => state.counts)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(2))}>加法</button>
      <button onClick={()=>dispatch(decrement(5))}>减法</button>
    </div>
  )
}
export default App
```
