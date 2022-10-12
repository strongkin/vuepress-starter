module.exports = {
  title: "TS文档",
  description: "TS文档翻译",
  theme: "reco",
  base: "/vuepress-starter/",
  themeConfig: {
    sidebar: "auto",
    // logo: "/assets/img/logo.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "面试集合",
        link: "/page/js/",
      },
      { text: "vue组件", link: "/handbook/ConditionalTypes" },
      {
        text: "vue学习",
        link: "/vue/",
        items: [
          { text: "vue基础", link: "/vue/vuebase/" },
          { text: "vuex", link: "/vue/vuex/" },
          { text: "vueRouter路由", link: "/vue/vueRouter/" },
        ],
      },
      {
        text: " JavaScript 博客",
        items: [
          { text: "Github", link: "https://github.com/strongkin" },
          {
            text: "掘金",
            link: "https://juejin.cn",
          },
        ],
      },
    ],
    sidebar: {
      "/handbook/": [
        {
          title: "基础学习",
          // path: "/handbook/",
          // sidebarDepth: 1,
          collapsable: false, // 不折叠
          children: [
            // ['handbooks/ConditionalTypes', "vue 相关原理进阶"],
            // [
            //   "handbook/Generics",
            //   "react-redux 的新特性 useSelector, useDispatch",
            // ],
            // ["handbook/Commponet", "vue组件开发"],
            // ["handbook/Ssr", "ssr"],
            { title: "vue 相关原理进阶", path: "/handbook/ConditionalTypes" },
            {
              title: "react-redux 的新特性 useSelector, useDispatch",
              path: "/handbook/Generics",
            },
            { title: "vue组件开发", path: "/handbook/Commponet" },
            { title: "ssr", path: "/handbook/Ssr" },
          ],
          // initialOpenGroupIndex: -1,
        },
        {
          title: "小兔仙+TS+pinia",
          // path: "/handbook/vueRabbitTs/01-项目起步",
          collapsable: true, // 不折叠
          children: [
            {
              title: "项目起步",
              path: "/handbook/vueRabbitTs/01-项目起步",
            },
            {
              title: "首页模块",
              path: "/handbook/vueRabbitTs/02-首页模块",
            },
            {
              title: "分类模块",
              path: "/handbook/vueRabbitTs/03-分类模块",
            },
            {
              title: "详情模块",
              path: "/handbook/vueRabbitTs/04-详情模块",
            },
            {
              title: "登录模块",
              path: "/handbook/vueRabbitTs/05-登录模块",
            },
            {
              title: "购物车模块",
              path: "/handbook/vueRabbitTs/06-购物车模块",
            },
            {
              title: "订单模块",
              path: "/handbook/vueRabbitTs/07-订单模块",
            },
            {
              title: "支付模块",
              path: "/handbook/vueRabbitTs/08-支付模块",
            },
            {
              title: "会员模块",
              path: "/handbook/vueRabbitTs/09-会员模块",
            },
            {
              title: "拓展阅读",
              path: "/handbook/vueRabbitTs/拓展阅读",
            },
          ],
          initialOpenGroupIndex: -1,
        },
      ],
      "/page/": [
        {
          title: "js基础学习",
          // path: "/page/js/JSBasics",
          collapsable: true, // 折叠
          children: [
            { title: "js基础", path: "/page/js/JSBasics" },
            {
              title: "js面试",
              path: "/page/js/jsInterview",
            },
            { title: "前端面试要点", path: "/page/js/jsInterviewPoints" },
          ],
        },
        {
          title: "js高级学习",
          // path: "/page/js/",
          collapsable: true, // 折叠
          children: [
            {
              title: "js基础",
              path: "/page/js/js基础/js1/JavaScript基础第01天笔记",
              children: [
                {
                  title: "js基础1",
                  path: "/page/js/js基础/js1/JavaScript基础第01天笔记",
                },
                {
                  title: "js基础2",
                  path: "/page/js/js基础/js2/JavaScript基础第02天笔记",
                },
                {
                  title: "js基础3",
                  path: "/page/js/js基础/js3/JavaScript基础第03天笔记",
                },
                {
                  title: "js基础4",
                  path: "/page/js/js基础/js4/JavaScript基础第04天笔记",
                },
                {
                  title: "js基础5",
                  path: "/page/js/js基础/js5/JavaScript基础第05天笔记",
                },
                {
                  title: "js基础6",
                  path: "/page/js/js基础/js6/JavaScript基础第06天笔记",
                },
              ],
            },
            {
              title: "js高级",
              path: "/page/js/js高级/js1/JavaScript高级第01天笔记",
              children: [
                {
                  title: "js高级1",
                  path: "/page/js/js高级/js1/JavaScript高级第01天笔记",
                },
                {
                  title: "js高级2",
                  path: "/page/js/js高级/js2/JavaScript高级第02天笔记",
                },
                {
                  title: "js高级3",
                  path: "/page/js/js高级/js3/JavaScript高级第03天笔记",
                },
                {
                  title: "js高级4",
                  path: "/page/js/js高级/js4/JavaScript高级第04天笔记",
                },
                {
                  title: "es6",
                  path: "/page/js/js高级/es6/es6-ES6概念&新增语法&内置对象拓展",
                },
              ],
            },
            {
              title: "WEBAPI",
              path: "/page/js/webapi/webapi1/day01_WebAPIs",
              children: [
                {
                  title: "webAPI1",
                  path: "/page/js/webapi/webapi1/day01_WebAPIs",
                },
                {
                  title: "webAPI2",
                  path: "/page/js/webapi/webapi1/day02_WebAPIs",
                },
                {
                  title: "webAPI3",
                  path: "/page/js/webapi/webapi1/day03_WebAPIs",
                },
                {
                  title: "webAPI4",
                  path: "/page/js/webapi/webapi1/day04_WebAPIs",
                },
                {
                  title: "webAPI5",
                  path: "/page/js/webapi/webapi1/day05_WebAPIs",
                },
                {
                  title: "webAPI6",
                  path: "/page/js/webapi/webapi2/day06_WebAPIs",
                },
                {
                  title: "webAPI7",
                  path: "/page/js/webapi/webapi3/day07_WebAPIs",
                },
              ],
            },
          ],
        },
        {
          title: "react学习",
          // path: "/page/react/reactbase",
          collapsable: true, // 不折叠
          children: [
            { title: "reacr基础", path: "/page/react/reactbase" },
            { title: "组件基础", path: "/page/react/componentreact" },
            { title: "组件通讯", path: "/page/react/componentContext" },
            { title: "组件的生命周期", path: "/page/react/ComponentLifeCycle" },
            { title: "react原理解密", path: "/page/react/reactsource" },
            { title: "react路由", path: "/page/react/reactRouter" },
            { title: "组件复用", path: "/page/react/componentreuse" },
            { title: "hooks基础", path: "/page/react/react-hooks" },
            { title: "hooks进阶", path: "/page/react/hooksadvanced" },
          ],
        },
        {
          title: "ts学习",
          // path: "/page/ts/TypeScript",
          collapsable: true, // 不折叠
          children: [
            {
              title: "ts介绍",
              path: "/page/ts/TypeScript",
            },
            {
              title: "ts常用类型",
              path: "/page/ts/TypeScriptBasicType",
            },
            {
              title: "ts高级类型",
              path: "/page/ts/TypeScriptAdvancedType",
            },
            {
              title: "在react项目中使用ts",
              path: "/page/ts/TSinReact",
            },
            {
              title: "使用ts改造项目",
              path: "/page/ts/RetrofitProjectsWithTs",
            },
          ],
        },
        {
          title: "uniapp知识",
          // path: "/page/uniapp/UnappBase",
          collapsable: true, // 不折叠
          children: [
            { title: "Vue服务端渲染", path: "/page/uniapp/rendering" },
            { title: "uniapp基础", path: "/page/uniapp/UnappBase" },
          ],
        },
        {
          title: "前端面试题",
          // path: "/page/interview/Front-endinterviewmanual",
          collapsable: true, // 不折叠
          children: [
            {
              title: "前端面试题",
              path: "/page/interview/Front-endinterviewmanual",
            },
          ],
        },
        {
          title: "vue电商后台项目",
          // path: "/page/vue/VueManageprojectsinthebackground",
          children: [
            {
              title: "vue电商后台项目",
              path: "/page/vue/VueManageprojectsinthebackground",
            },
          ],
        },
        {
          title: "移动h5",
          // path: "/page/vue/geek/ProjectInitialization",
          children: [
            {
              title: "项目初始化",
              path: "/page/vue/geek/ProjectInitialization",
            },
            { title: "登录注册", path: "/page/vue/geek/LoginRegister" },
            { title: "个人中心", path: "/page/vue/geek/03-个人中心" },
            {
              title: "首页-文章列表",
              path: "/page/vue/geek/04-首页-文章列表",
            },
            {
              title: "首页-频道编辑",
              path: "/page/vue/geek/05-首页-频道编辑",
            },
            {
              title: "文章搜索",
              path: "/page/vue/geek/06-文章搜索",
            },
            {
              title: "文章详情",
              path: "/page/vue/geek/07-文章详情",
            },
            {
              title: "文章评论",
              path: "/page/vue/geek/08-文章评论",
            },
            {
              title: "用户页面",
              path: "/page/vue/geek/09-用户页面",
            },
            {
              title: "用户关注&粉丝",
              path: "/page/vue/geek/10-用户关注&粉丝",
            },
            {
              title: "我的收藏-历史",
              path: "/page/vue/geek/11-我的收藏-历史",
            },
            {
              title: "编辑用户资料",
              path: "/page/vue/geek/12-编辑用户资料",
            },
          ],
        },
      ],
      "/vue/": [
        {
          title: "vue学习",
          // link: "/docs/vue/vuebase.md",
          path: "/vue/vuebase",
          collapsable: true, // 不折叠
          children: [
            { title: "vue基础", path: "/vue/vuebase" },
            { title: "vuex", path: "/vue/vuex" },
            { title: "vueRouter路由", path: "/vue/vueRouter" },
            { title: "vue源码", path: "/vue/vueSource" },
            { title: "vue面试", path: "/vue/vueInterview" },
            { title: "vue3", path: "/vue/vue3" },
            { title: "虚拟DOM", path: "/vue/vueVirtualDom" },
            // { title: "服务端渲染", path: "/vue/rendering" },
            { title: "响应式原理", path: "/vue/vueResponed" },
          ],
        },
        {
          title: "人力管理",
          path: "/vue/hrsaas/01-vuex基础",
          children: [
            {
              title: "vuex基础",
              path: "/vue/hrsaas/01-vuex基础",
            },
            {
              title: "基础环境搭建",
              path: "/vue/hrsaas/02-基础环境搭建",
            },
            {
              title: "登录模块",
              path: "/vue/hrsaas/03-登录模块",
            },
            {
              title: "主页模块",
              path: "/vue/hrsaas/04-主页模块",
            },
            {
              title: "路由和页面",
              path: "/vue/hrsaas/05-路由和页面",
            },
            {
              title: "组织架构",
              path: "/vue/hrsaas/06-组织架构",
            },
            {
              title: "公司和角色",
              path: "/vue/hrsaas/07-公司和角色",
            },
            {
              title: "员工管理",
              path: "/vue/hrsaas/08-员工管理",
            },
            {
              title: "权限设计和管理",
              path: "/vue/hrsaas/09-权限设计和管理",
            },
            {
              title: "其他模块集成",
              path: "/vue/hrsaas/10-其他模块集成",
            },
            {
              title: "主页审批-图表",
              path: "/vue/hrsaas/11-主页审批-图表",
            },
            {
              title: "多语言tab页全屏主题",
              path: "/vue/hrsaas/12-多语言tab页全屏主题",
            },
            {
              title: "打包上线",
              path: "/vue/hrsaas/13-打包上线",
            },
            {
              title: "Element表单校验补充",
              path: "/vue/hrsaas/Element表单校验补充",
            },
          ],
        },
        {
          title: "小兔仙",
          path: "/vue/rabbit/00-vue3入门",
          children: [
            { title: "vue3入门", path: "/vue/rabbit/00-vue3入门" },
            { title: "项目介绍", path: "/vue/rabbit/01-项目介绍" },
            { title: "项目起步", path: "/vue/rabbit/02-项目起步" },
            {
              title: "首页模块-Layout",
              path: "/vue/rabbit/03-首页模块-Layout",
            },
            {
              title: "首页模块-main主体",
              path: "/vue/rabbit/04-首页模块-main主体",
            },
            { title: "分类模块", path: "/vue/rabbit/05-分类模块" },
            { title: "详情模块", path: "/vue/rabbit/06-详情模块" },
            { title: "登录模块", path: "/vue/rabbit/07-登录模块" },
            { title: "购物车模块", path: "/vue/rabbit/08-购物车模块" },
            { title: "结算中心模块", path: "/vue/rabbit/09-结算中心模块" },
          ],
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: [
          "blackCat",
          "whiteCat",
          "haru1",
          "haru2",
          "haruto",
          "koharu",
          "izumi",
          "shizuku",
          "wanko",
          "miku",
          "z16",
        ],
      },
    ],
    // ["vuepress-plugin-nuggets-style-copy"],
  ],
  // markdown: {
  //   lineNumbers: true,
  // },
}
// plugins: [
//   //. omitted
//   ["vuepress-plugin-nuggets-style-copy"],
// ]
// plugins= [
//     [
//       "vuepress-plugin-nuggets-style-copy",
//       {
//         copyText: "复制代码",
//         tip: {
//           content: "复制成功",
//         },
//       },
//     ],
//     [
//       "@vuepress-reco/vuepress-plugin-kan-ban-niang",
//       {
//         theme: [
//           "shizuku",
//           "z16",
//           "blackCat",
//           "whiteCat",
//           "haru1",
//           "haru2",
//           "haruto",
//           "koharu",
//           "izumi",
//           "wanko",
//           "miku",
//         ],
//       },
//     ],
//   ],
