(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{925:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"在-react-项目中使用-ts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-react-项目中使用-ts"}},[t._v("#")]),t._v(" 在 React 项目中使用 TS")]),t._v(" "),s("ol",[s("li",[t._v("创建新项目")]),t._v(" "),s("li",[t._v("在现有项目中添加 TS")])]),t._v(" "),s("h2",{attrs:{id:"创建新项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新项目"}},[t._v("#")]),t._v(" 创建新项目")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("命令："),s("code",[t._v("npx create-react-app my-app --template typescript")])])]),t._v(" "),s("li",[s("p",[t._v("说明：在命令行中，添加 "),s("code",[t._v("--template typescript")]),t._v(" 表示创建支持 TS 的项目")])]),t._v(" "),s("li",[s("p",[t._v("项目目录的变化：")]),t._v(" "),s("ol",[s("li",[t._v("在项目根目录中多了一个文件："),s("code",[t._v("tsconfig.json")]),t._v(" "),s("ul",[s("li",[t._v("TS 的配置文件")])])]),t._v(" "),s("li",[t._v("在 src 目录中，文件的后缀有变化，由原来的 .js 变为 "),s("code",[t._v(".ts")]),t._v(" 或 "),s("code",[t._v(".tsx")]),t._v(" "),s("ul",[s("li",[s("code",[t._v(".ts")]),t._v(" ts 文件的后缀名")]),t._v(" "),s("li",[s("code",[t._v(".tsx")]),t._v(" 是在 TS 中使用 React 组件时，需要使用该后缀")])])]),t._v(" "),s("li",[t._v("在 src 目录中，多了 "),s("code",[t._v("react-app-env.d.ts")]),t._v(" 文件\n"),s("ul",[s("li",[s("code",[t._v(".d.ts")]),t._v(" 类型声明文件，用来指定类型")])])])])])]),t._v(" "),s("h2",{attrs:{id:"tsconfig的介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig的介绍"}},[t._v("#")]),t._v(" tsconfig的介绍")]),t._v(" "),s("ul",[s("li",[t._v("tsconfig.json是typescript项目的配置文件，用于配置typescript")]),t._v(" "),s("li",[t._v("tsconfig.json配置文件可以通过 "),s("code",[t._v("tsc --init")]),t._v(" 生成")])]),t._v(" "),s("ul",[s("li",[t._v("说明：所有的配置项都可以通过鼠标移入的方式，来查看配置项的解释说明。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("tsconfig 文档链接"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译选项")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成代码的语言版本：将我们写的 TS 代码编译成哪个版本的 JS 代码")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 命令行： tsc --target es5 11-测试TS配置文件.ts")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定要包含在编译中的 library")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dom.iterable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esnext"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许 ts 编译器编译 js 文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowJs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳过类型声明文件的类型检查")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipLibCheck"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// es 模块 互操作，屏蔽 ESModule 和 CommonJS 之间的差异")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"esModuleInterop"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许通过 import x from 'y' 即使模块没有显式指定 default 导出")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowSyntheticDefaultImports"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启严格模式")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strict"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对文件名称强制区分大小写")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"forceConsistentCasingInFileNames"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为 switch 语句启用错误报告")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noFallthroughCasesInSwitch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成代码的模块化标准")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esnext"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块解析（查找）策略")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleResolution"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许导入扩展名为.json的模块")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resolveJsonModule"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否将没有 import/export 的文件视为旧（全局而非模块化）脚本文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isolatedModules"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译时不生成任何文件（只进行类型检查）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noEmit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定将 JSX 编译成什么形式")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsx"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-jsx"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定允许 ts 处理的目录")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h1",{attrs:{id:"typescript声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript声明文件"}},[t._v("#")]),t._v(" typescript声明文件")]),t._v(" "),s("p",[t._v("今天几乎所有的 JavaScript 应用都会引入许多第三方库来完成任务需求。")]),t._v(" "),s("p",[t._v("这些第三方库不管是否是用 TS 编写的，最终都要编译成 JS 代码，才能发布给开发者使用。")]),t._v(" "),s("p",[t._v("我们知道是 TS 提供了类型，才有了代码提示和类型保护等机制。")]),t._v(" "),s("p",[t._v("但在项目开发中使用第三方库时，你会发现它们几乎都有相应的 TS 类型，这些类型是怎么来的呢? "),s("code",[t._v("类型声明文件")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型声明文件：用来为已存在的 JS 库提供类型信息")])])]),t._v(" "),s("p",[t._v("这样在 TS 项目中使用这些库时，就像用 TS 一样，都会有代码提示、类型保护等机制了。")]),t._v(" "),s("ol",[s("li",[t._v("TS 的两种文件类型")]),t._v(" "),s("li",[t._v("类型声明文件的使用说明")])]),t._v(" "),s("h2",{attrs:{id:"ts-中的两种文件类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts-中的两种文件类型"}},[t._v("#")]),t._v(" TS 中的两种文件类型")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("TS 中有两种文件类型：1 "),s("code",[t._v(".ts")]),t._v(" 文件 2 "),s("code",[t._v(".d.ts")]),t._v(" 文件")])]),t._v(" "),s("li",[s("p",[t._v(".ts 文件:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("既包含类型信息又可执行代码")])]),t._v(" "),s("li",[t._v("可以被编译为 .js 文件，然后，执行代码")]),t._v(" "),s("li",[t._v("用途：编写程序代码的地方")])])]),t._v(" "),s("li",[s("p",[t._v(".d.ts 文件:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("只包含类型信息")]),t._v("的类型声明文件")]),t._v(" "),s("li",[s("strong",[t._v("不会生成 .js 文件，仅用于提供类型信息,在.d.ts文件中不允许出现可执行的代码，只用于提供类型")])]),t._v(" "),s("li",[t._v("用途：为 JS 提供类型信息")])])]),t._v(" "),s("li",[s("p",[t._v("总结：.ts 是 "),s("code",[t._v("implementation")]),t._v("(代码实现文件)；"),s("strong",[t._v(".d.ts 是 declaration(类型声明文件)")])])]),t._v(" "),s("li",[s("p",[t._v("如果要为 JS 库提供类型信息，要使用 "),s("code",[t._v(".d.ts")]),t._v(" 文件")])])]),t._v(" "),s("h2",{attrs:{id:"类型声明文件的使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型声明文件的使用说明"}},[t._v("#")]),t._v(" 类型声明文件的使用说明")]),t._v(" "),s("ul",[s("li",[t._v("在使用 TS 开发项目时，类型声明文件的使用包括以下两种方式:\n"),s("ol",[s("li",[t._v("使用已有的类型声明文件")]),t._v(" "),s("li",[t._v("创建自己的类型声明文件")])])])]),t._v(" "),s("p",[t._v("使用已有的类型声明文件")]),t._v(" "),s("ol",[s("li",[t._v("内置类型声明文件")]),t._v(" "),s("li",[t._v("第三方库的类型声明文件")]),t._v(" "),s("li",[t._v("自己提供的")])]),t._v(" "),s("h2",{attrs:{id:"内置类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置类型声明文件"}},[t._v("#")]),t._v(" 内置类型声明文件")]),t._v(" "),s("ul",[s("li",[t._v("TS 为 JS 运行时可用的所有标准化内置 API 都提供了声明文件")]),t._v(" "),s("li",[t._v("比如，在使用数组时，数组所有方法都会有相应的代码提示以及类型信息:")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" strs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标放在 forEach 上查看类型")]),t._v("\nstrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forEach\n")])])]),s("ul",[s("li",[t._v("实际上这都是 TS 提供的内置类型声明文件")]),t._v(" "),s("li",[t._v("可以通过 Ctrl + 鼠标左键(Mac：Command + 鼠标左键)来查看内置类型声明文件内容")]),t._v(" "),s("li",[t._v("比如，查看 forEach 方法的类型声明，在 VSCode 中会自动跳转到 "),s("code",[t._v("lib.es5.d.ts")]),t._v(" 类型声明文件中")]),t._v(" "),s("li",[t._v("当然，像 window、document 等 BOM、DOM API 也都有相应的类型声明("),s("code",[t._v("lib.dom.d.ts")]),t._v(")")])]),t._v(" "),s("h2",{attrs:{id:"第三方库的类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方库的类型声明文件"}},[t._v("#")]),t._v(" 第三方库的类型声明文件")]),t._v(" "),s("ul",[s("li",[t._v("目前，几乎所有常用的第三方库都有相应的类型声明文件")]),t._v(" "),s("li",[t._v("第三方库的类型声明文件有两种存在形式:1 库自带类型声明文件 2 由 DefinitelyTyped 提供。")])]),t._v(" "),s("ol",[s("li",[t._v("库自带类型声明文件：比如，axios")])]),t._v(" "),s("ul",[s("li",[t._v("查看 "),s("code",[t._v("node_modules/axios")]),t._v(" 目录")])]),t._v(" "),s("p",[t._v("解释：这种情况下，正常导入该库，"),s("strong",[t._v("TS 就会自动加载库自己的类型声明文件")]),t._v("，以提供该库的类型声明。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("由 DefinitelyTyped 提供")])]),t._v(" "),s("ul",[s("li",[t._v("DefinitelyTyped 是一个 github 仓库，用来提供高质量 TypeScript 类型声明")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped 链接"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("可以通过 npm/yarn 来下载该仓库提供的 TS 类型声明包，这些包的名称格式为:"),s("code",[t._v("@types/*")])]),t._v(" "),s("li",[t._v("比如，@types/react、@types/lodash 等")]),t._v(" "),s("li",[t._v("说明：在实际项目开发时，如果你使用的第三方库没有自带的声明文件，VSCode 会给出明确的提示")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" _ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 VSCode 中，查看 'lodash' 前面的提示")]),t._v("\n")])])]),s("ul",[s("li",[t._v("解释：当安装 "),s("code",[t._v("@types/*")]),t._v(" 类型声明包后，"),s("strong",[t._v("TS 也会自动加载该类声明包")]),t._v("，以提供该库的类型声明")]),t._v(" "),s("li",[t._v("补充：TS 官方文档提供了一个页面，可以来查询 @types/* 库")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.typescriptlang.org/dt",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types/* 库"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"创建自己的类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建自己的类型声明文件"}},[t._v("#")]),t._v(" 创建自己的类型声明文件")]),t._v(" "),s("ol",[s("li",[t._v("项目内共享类型")]),t._v(" "),s("li",[t._v("为已有 JS 文件提供类型声明")])]),t._v(" "),s("h3",{attrs:{id:"项目内共享类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目内共享类型"}},[t._v("#")]),t._v(" 项目内共享类型")]),t._v(" "),s("ul",[s("li",[t._v("如果多个 .ts 文件中都用到同一个类型，此时可以创建 .d.ts 文件提供该类型，实现类型共享。")]),t._v(" "),s("li",[t._v("操作步骤:\n"),s("ol",[s("li",[t._v("创建 index.d.ts 类型声明文件。")]),t._v(" "),s("li",[t._v("创建需要共享的类型，并使用 export 导出(TS 中的类型也可以使用 import/export 实现模块化功能)。")]),t._v(" "),s("li",[t._v("在需要使用共享类型的 .ts 文件中，通过 import 导入即可(.d.ts 后缀导入时，直接省略)。")])])])]),t._v(" "),s("h3",{attrs:{id:"为已有-js-文件提供类型声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为已有-js-文件提供类型声明"}},[t._v("#")]),t._v(" 为已有 JS 文件提供类型声明")]),t._v(" "),s("ol",[s("li",[t._v("在将 JS 项目迁移到 TS 项目时，为了让已有的 .js 文件有类型声明。")]),t._v(" "),s("li",[t._v("成为库作者，创建库给其他人使用。")])]),t._v(" "),s("ul",[s("li",[t._v("注意:类型声明文件的编写与模块化方式相关，不同的模块化方式有不同的写法。但由于历史原因，JS 模块化的发展 经历过多种变化(AMD、CommonJS、UMD、ESModule 等)，而 TS 支持各种模块化形式的类型声明。这就导致 ，类型声明文件相关内容又多又杂。")]),t._v(" "),s("li",[t._v("演示:基于最新的 ESModule(import/export)来为已有 .js 文件，创建类型声明文件。")])]),t._v(" "),s("h3",{attrs:{id:"类型声明文件的使用说明-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型声明文件的使用说明-2"}},[t._v("#")]),t._v(" 类型声明文件的使用说明")]),t._v(" "),s("ul",[s("li",[t._v("说明:TS 项目中也可以使用 .js 文件。")]),t._v(" "),s("li",[t._v("说明:在导入 .js 文件时，TS 会自动加载与 .js 同名的 .d.ts 文件，以提供类型声明。")]),t._v(" "),s("li",[t._v("declare 关键字:用于类型声明，为其他地方(比如，.js 文件)已存在的变量声明类型，而不是创建一个新的变量。\n"),s("ol",[s("li",[t._v("对于 type、interface 等这些明确就是 TS 类型的(只能在 TS 中使用的)，可以省略 declare 关键字。")]),t._v(" "),s("li",[t._v("对于 let、function 等具有双重含义(在 JS、TS 中都能用)，应该使用 declare 关键字，明确指定此处用于类型声明。")])])])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" songName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'痴心绝对'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeDirection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("direction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fomartPoint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("point")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前坐标：'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" point"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" songName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" changeDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fomartPoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("定义类型声明文件")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("declare "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number\n\ndeclare "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("songName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Position")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndeclare "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Position\n\ndeclare "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number\n\ntype Direction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'left'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'right'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'top'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bottom'")]),t._v("\n\ndeclare "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeDirection")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("direction")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n\ntype "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("FomartPoint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("point")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n\ndeclare "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fomartPoint")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FomartPoint\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" songName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" changeDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FomartPoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fomartPoint\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h1",{attrs:{id:"在现有项目中添加-ts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在现有项目中添加-ts"}},[t._v("#")]),t._v(" 在现有项目中添加 TS")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://create-react-app.dev/docs/adding-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRA 添加 ts 文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("如果要在现有的 JS 项目中，添加 TS，需要以下操作：")])]),t._v(" "),s("ol",[s("li",[t._v("安装包："),s("code",[t._v("yarn add typescript @types/node @types/react @types/react-dom @types/jest")])]),t._v(" "),s("li",[t._v("把 "),s("code",[t._v("jsconfig.json")]),t._v("改成 path.tsconfig.json")]),t._v(" "),s("li",[t._v("将原来通过 React 脚手架创建的 TS 项目中的 tsconfig.json 中的配置，拷贝到咱们自己的项目中")]),t._v(" "),s("li",[t._v("创建 "),s("code",[t._v("path.tsconfig.json")]),t._v(" 文件，将原来 "),s("code",[t._v("jsconfig.json")]),t._v(" 文件中的内容拿过来")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseUrl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paths"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@/*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@scss/*"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/assets/styles/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("在 "),s("code",[t._v("tsconfig.json")]),t._v(" 中，添加以下配置：")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加这一句")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./path.tsconfig.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("将通过 React 脚手架创建的 TS 项目中的 "),s("code",[t._v("src/react-app-env.d.ts")]),t._v(" 拷贝到咱们自己项目的 src 目录下")]),t._v(" "),s("li",[t._v("重启项目")])]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("ol",[s("li",[t._v("项目中使用 TS 时，既可以包含 js 文件，又可以包含 ts 文件")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v(".js")]),t._v("、"),s("code",[t._v(".jsx")]),t._v("（使用 JS 时，React 组件对应的文件后缀）")]),t._v(" "),s("li",[s("code",[t._v(".ts")]),t._v("、"),s("code",[t._v(".tsx")]),t._v("（使用 TS 时，React 组件对应的文件后缀）、"),s("code",[t._v(".d.ts")])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在已有项目中，添加 TS 时的推荐模式")])]),t._v(" "),s("ul",[s("li",[t._v("新的功能用 TS")]),t._v(" "),s("li",[t._v("已实现的功能，可以继续保持 JS 文件，慢慢修改为 TS 即可")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("React 组件对应的文件后缀，修改为："),s("code",[t._v(".tsx")])]),t._v(" "),s("li",[t._v("工具函数对应的文件后缀，修改为："),s("code",[t._v(".ts")]),t._v(" 或者为其添加类型声明文件 "),s("code",[t._v(".d.ts")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);