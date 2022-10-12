# vuepress-starter
`看板娘,代码复制插件`
```js
// 代码复制插件
yarn add vuepress-plugin-nuggets-style-copy
// 看板娘插件
yarn add @vuepress-reco/vuepress-plugin-kan-ban-niang
```
config.js配置
```js
module.exports = {
  ...
  plugins: [
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功",
        },
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: [
          "z16",
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
        ],
      },
    ],
  ],
}
```
