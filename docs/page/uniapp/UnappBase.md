## 1终端中的快捷键
在windows的powershell或cmd终端中，我们可以通过如下快捷键，来提高终端操作效率：
① 使用 `↑ `键，可以快速定位到上一次执行的命令
② 使用 `tab` 键，能够快速补全路径
③ 使用` esc `键，能够快速清空当前已输入的命令
④ 输入 `cls` 命令，可以清空终端
 fs.readFile() 方法，用来读取指定文件中的内容
 fs.writeFile() 方法，用来向指定的文件中写入内容
如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它
可以通过HBuilderX和vuecli进行构建uniapp项目
在点击工具栏里的文件 -> 新建 -> 项目（快捷键Ctrl+N）：
```js
const fs = require('fs')
```
1. fs.readFile() 的语法格式
使用 fs.readFile() 方法，可以读取指定文件中的内容，语法格式如下：
```js
fs.readFile(path[,options],callback)
```
参数解读：
⚫ 参数1：必选参数，字符串，表示文件的路径。
⚫ 参数2：可选参数，表示以什么编码格式来读取文件。
⚫ 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。

2.2 读取指定文件中的内容
2. fs.readFile() 的示例代码
以 utf8 的编码格式，读取指定文件的内容，并打印 err 和 dataStr 的值：
``` js
const fs = require('fs')
fs.readFile('./files/11.txt','utf8',function(err,dataStr){
  console.log(err)
  console.log('------')
  console.log(dataStr)
})
```
选择uni-app类型，输入工程名，选择模板，点击创建，即可成功创建。
