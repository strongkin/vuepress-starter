module.exports = {
  title: "TS文档",
  description: "TS文档翻译",
  base: "/vuepress-starter/",
  themeConfig: {
    // logo: "/assets/img/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "vue组件", link: "/handbook/ConditionalTypes" },
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
     sidebar: [
        "/handbook/": [
        // {
        //   title: "欢迎来到strongKing学习乐园",
        //   path: "/",
        //   collapsable: false, // 不折叠
        //   children: [{ title: "学前必读", path: "/" }],
        // },
        {
          title: "基础学习",
          // path: "/handbook/ConditionalTypes",
          collapsable: true, // 不折叠
          children: [
            { title: "vue 相关原理进阶", path: "/handbook/ConditionalTypes" },
            {
              title: "react-redux 的新特性 useSelector, useDispatch",
              path: "/handbook/Generics",
            },
            { title: "vue组件开发", path: "/handbook/Commponet" },
            { title: "ssr", path: "/handbook/Ssr" },
          ],
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
        },
      ],
    ]
  },
}
