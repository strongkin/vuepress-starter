(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{781:function(t,s,n){t.exports=n.p+"assets/img/1.93c0cbcb.png"},782:function(t,s,n){t.exports=n.p+"assets/img/2.c69c52ac.png"},914:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"day06-web-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#day06-web-apis"}},[t._v("#")]),t._v(" "),s("strong",[t._v("day06 - Web APIs")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("学习目标:")])]),t._v(" "),s("p",[t._v("能够封装简单动画函数")]),t._v(" "),s("p",[t._v("能够理解缓动动画的封装")]),t._v(" "),s("p",[t._v("能够使用动画函数")]),t._v(" "),s("p",[t._v("能够写出网页轮播图案例")]),t._v(" "),s("p",[t._v("能够写出移动端触屏事件")])]),t._v(" "),s("h2",{attrs:{id:"_1-1-动画函数封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-动画函数封装"}},[t._v("#")]),t._v(" **1.1. **动画函数封装")]),t._v(" "),s("h3",{attrs:{id:"_1-1-1-缓动效果原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-缓动效果原理"}},[t._v("#")]),t._v(" 1.1.1 缓动效果原理")]),t._v(" "),s("p",[t._v("缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来")]),t._v(" "),s("p",[t._v("思路：")]),t._v(" "),s("ol",[s("li",[t._v("让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。")]),t._v(" "),s("li",[t._v("核心算法： (目标值 - 现在的位置)   /  10    做为每次移动的距离步长")]),t._v(" "),s("li",[t._v("停止的条件是： 让当前盒子位置等于目标位置就停止定时器")]),t._v(" "),s("li",[t._v("注意步长值需要取整")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-2-动画函数多个目标值之间移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-动画函数多个目标值之间移动"}},[t._v("#")]),t._v(" 1.1.2 动画函数多个目标值之间移动")]),t._v(" "),s("p",[t._v("可以让动画函数从 800 移动到 500。")]),t._v(" "),s("p",[t._v("当我们点击按钮时候，判断步长是正值还是负值")]),t._v(" "),s("p",[t._v("​\t1.如果是正值，则步长往大了取整")]),t._v(" "),s("p",[t._v("​\t2.如果是负值，则步长 向小了取整")]),t._v(" "),s("h3",{attrs:{id:"_1-1-3-动函数添加回调函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-动函数添加回调函数"}},[t._v("#")]),t._v(" 1.1.3  动函数添加回调函数")]),t._v(" "),s("p",[t._v("回调函数原理：函数可以作为一个参数。将这个函数作为参数传到另一个函数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程就叫做回调。")]),t._v(" "),s("p",[t._v("回调函数写的位置：定时器结束的位置。")]),t._v(" "),s("h3",{attrs:{id:"_1-1-4-动画完整版代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-动画完整版代码"}},[t._v("#")]),t._v(" 1.1.4  动画完整版代码:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(callback);  callback = function() {}  调用的时候 callback()")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先清除以前的定时器，只保留当前的一个定时器执行")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 步长值写到定时器的里面")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把我们步长值改为整数 不要出现小数的问题")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var step = Math.ceil((target - obj.offsetLeft) / 10);")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" step "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        step "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" step "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止动画 本质是停止定时器")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回调函数写到定时器结束里面")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (callback) {")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     // 调用函数")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     callback();")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n            callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10")]),t._v("\n        obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" step "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_1-2-常见网页特效案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-常见网页特效案例"}},[t._v("#")]),t._v(" 1.2. 常见网页特效案例")]),t._v(" "),s("h3",{attrs:{id:"_1-2-1-案例-网页轮播图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-案例-网页轮播图"}},[t._v("#")]),t._v(" 1.2.1 案例：网页轮播图")]),t._v(" "),s("p",[t._v("轮播图也称为焦点图，是网页中比较常见的网页特效。")]),t._v(" "),s("p",[t._v("功能需求：")]),t._v(" "),s("p",[t._v("​\t1.鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。")]),t._v(" "),s("p",[t._v("​\t2.点击右侧按钮一次，图片往左播放一张，以此类推，左侧按钮同理。")]),t._v(" "),s("p",[t._v("​\t3.图片播放的同时，下面小圆圈模块跟随一起变化。")]),t._v(" "),s("p",[t._v("​\t4.点击小圆圈，可以播放相应图片。")]),t._v(" "),s("p",[t._v("​\t5.鼠标不经过轮播图，轮播图也会自动播放图片。")]),t._v(" "),s("p",[t._v("​\t6.鼠标经过，轮播图模块， 自动播放停止。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("window.addEventListener('load', function() {\n    // 1. 获取元素\n    var arrow_l = document.querySelector('.arrow-l');\n    var arrow_r = document.querySelector('.arrow-r');\n    var focus = document.querySelector('.focus');\n    var focusWidth = focus.offsetWidth;\n    // 2. 鼠标经过focus 就显示隐藏左右按钮\n    focus.addEventListener('mouseenter', function() {\n        arrow_l.style.display = 'block';\n        arrow_r.style.display = 'block';\n        clearInterval(timer);\n        timer = null; // 清除定时器变量\n    });\n    focus.addEventListener('mouseleave', function() {\n        arrow_l.style.display = 'none';\n        arrow_r.style.display = 'none';\n        timer = setInterval(function() {\n            //手动调用点击事件\n            arrow_r.click();\n        }, 2000);\n    });\n    // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈\n    var ul = focus.querySelector('ul');\n    var ol = focus.querySelector('.circle');\n    // console.log(ul.children.length);\n    for (var i = 0; i < ul.children.length; i++) {\n        // 创建一个小li \n        var li = document.createElement('li');\n        // 记录当前小圆圈的索引号 通过自定义属性来做 \n        li.setAttribute('index', i);\n        // 把小li插入到ol 里面\n        ol.appendChild(li);\n        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件\n        li.addEventListener('click', function() {\n            // 干掉所有人 把所有的小li 清除 current 类名\n            for (var i = 0; i < ol.children.length; i++) {\n                ol.children[i].className = '';\n            }\n            // 留下我自己  当前的小li 设置current 类名\n            this.className = 'current';\n            // 5. 点击小圆圈，移动图片 当然移动的是 ul \n            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值\n            // 当我们点击了某个小li 就拿到当前小li 的索引号\n            var index = this.getAttribute('index');\n            // 当我们点击了某个小li 就要把这个li 的索引号给 num  \n            num = index;\n            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  \n            circle = index;\n            // num = circle = index;\n            console.log(focusWidth);\n            console.log(index);\n\n            animate(ul, -index * focusWidth);\n        })\n    }\n    // 把ol里面的第一个小li设置类名为 current\n    ol.children[0].className = 'current';\n    // 6. 克隆第一张图片(li)放到ul 最后面\n    var first = ul.children[0].cloneNode(true);\n    ul.appendChild(first);\n    // 7. 点击右侧按钮， 图片滚动一张\n    var num = 0;\n    // circle 控制小圆圈的播放\n    var circle = 0;\n    // flag 节流阀\n    var flag = true;\n    arrow_r.addEventListener('click', function() {\n        if (flag) {\n            flag = false; // 关闭节流阀\n            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0\n            if (num == ul.children.length - 1) {\n                ul.style.left = 0;\n                num = 0;\n            }\n            num++;\n            animate(ul, -num * focusWidth, function() {\n                flag = true; // 打开节流阀\n            });\n            // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放\n            circle++;\n            // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原\n            if (circle == ol.children.length) {\n                circle = 0;\n            }\n            // 调用函数\n            circleChange();\n        }\n    });\n\n    // 9. 左侧按钮做法\n    arrow_l.addEventListener('click', function() {\n        if (flag) {\n            flag = false;\n            if (num == 0) {\n                num = ul.children.length - 1;\n                ul.style.left = -num * focusWidth + 'px';\n\n            }\n            num--;\n            animate(ul, -num * focusWidth, function() {\n                flag = true;\n            });\n            // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放\n            circle--;\n            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）\n            // if (circle < 0) {\n            //     circle = ol.children.length - 1;\n            // }\n            circle = circle < 0 ? ol.children.length - 1 : circle;\n            // 调用函数\n            circleChange();\n        }\n    });\n\n    function circleChange() {\n        // 先清除其余小圆圈的current类名\n        for (var i = 0; i < ol.children.length; i++) {\n            ol.children[i].className = '';\n        }\n        // 留下当前的小圆圈的current类名\n        ol.children[circle].className = 'current';\n    }\n    // 10. 自动播放轮播图\n    var timer = setInterval(function() {\n        //手动调用点击事件\n        arrow_r.click();\n    }, 2000);\n\n})\n")])])]),s("h3",{attrs:{id:"_1-2-2-节流阀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-节流阀"}},[t._v("#")]),t._v(" 1.2.2. 节流阀")]),t._v(" "),s("p",[t._v("防止轮播图按钮连续点击造成播放过快。")]),t._v(" "),s("p",[t._v("节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。")]),t._v(" "),s("p",[t._v("核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数。")]),t._v(" "),s("p",[t._v("开始设置一个变量var flag= true;")]),t._v(" "),s("p",[t._v("If(flag){flag = false; do something}       关闭水龙头")]),t._v(" "),s("p",[t._v("利用回调函数动画执行完毕， flag = true     打开水龙头")]),t._v(" "),s("h3",{attrs:{id:"_1-2-3-案例-返回顶部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-案例-返回顶部"}},[t._v("#")]),t._v(" 1.2.3. 案例：返回顶部")]),t._v(" "),s("ol",[s("li",[t._v("带有动画的返回顶部")]),t._v(" "),s("li",[t._v("此时可以继续使用我们封装的动画函数")]),t._v(" "),s("li",[t._v("只需要把所有的left 相关的值改为 跟 页面垂直滚动距离相关就可以了")]),t._v(" "),s("li",[t._v("页面滚动了多少，可以通过 window.pageYOffset 得到")]),t._v(" "),s("li",[t._v("最后是页面滚动，使用 window.scroll(x,y)")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1. 获取元素")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sliderbar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.slider-bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" banner "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.banner'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// banner.offestTop 就是被卷去头部的大小 一定要写到滚动的外面")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bannerTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" banner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当我们侧边栏固定定位之后应该变化的数值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sliderbarTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sliderbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" bannerTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取main 主体元素")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" main "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" goBack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.goBack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mainTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 页面滚动事件 scroll")]),t._v("\n        document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(11);")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window.pageYOffset 页面被卷去的头部")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(window.pageYOffset);")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 .当我们页面被卷去的头部大于等于了 172 此时 侧边栏就要改为固定定位")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" bannerTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    sliderbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fixed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    sliderbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sliderbarTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    sliderbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'absolute'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    sliderbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'300px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 当我们页面滚动到main盒子，就显示 goback模块")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" mainTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    goBack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'block'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    goBack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 当我们点击了返回顶部模块，就让窗口滚动的页面的最上方")]),t._v("\n        goBack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 里面的x和y 不跟单位的 直接写数字即可")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window.scroll(0, 0);")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为是窗口滚动 所以对象是window")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"_1-2-4-案例-筋头云案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-案例-筋头云案例"}},[t._v("#")]),t._v(" 1.2.4. 案例：筋头云案例")]),t._v(" "),s("ol",[s("li",[t._v("利用动画函数做动画效果")]),t._v(" "),s("li",[t._v("原先筋斗云的起始位置是0")]),t._v(" "),s("li",[t._v("鼠标经过某个小li，把当前小li的offsetLeft 位置做为目标值即可")]),t._v(" "),s("li",[t._v("鼠标离开某个小li，就把目标值设为 0")]),t._v(" "),s("li",[t._v("如果点击了某个小li， 就把li当前的位置存储起来，做为筋斗云的起始位置")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 获取元素")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cloud "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.cloud'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c_nav "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.c-nav'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lis "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c_nav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 给所有的小li绑定事件 ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个current 做为筋斗云的起始位置")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" lis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (1) 鼠标经过把当前小li 的位置做为目标值")]),t._v("\n                lis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mouseenter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (2) 鼠标离开就回到起始的位置 ")]),t._v("\n                lis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mouseleave'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (3) 当我们鼠标点击，就把当前位置做为目标值")]),t._v("\n                lis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"_1-3-触屏事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-触屏事件"}},[t._v("#")]),t._v(" 1.3. 触屏事件")]),t._v(" "),s("h3",{attrs:{id:"_1-3-1-触屏事件概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-触屏事件概述"}},[t._v("#")]),t._v(" 1.3.1. 触屏事件概述")]),t._v(" "),s("p",[t._v("移动端浏览器兼容性较好，我们不需要考虑以前 JS 的兼容性问题，可以放心的使用原生 JS 书写效果，但是移动端也有自己独特的地方。比如触屏事件 touch（也称触摸事件），Android和 IOS 都有。")]),t._v(" "),s("p",[t._v("touch 对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。触屏事件可响应用户手指（或触控笔）对屏幕或者触控板操作。")]),t._v(" "),s("p",[t._v("常见的触屏事件如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(781),alt:"图片1"}})]),t._v(" "),s("h3",{attrs:{id:"_1-3-2-触摸事件对象-touchevent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-触摸事件对象-touchevent"}},[t._v("#")]),t._v(" 1.3.2. 触摸事件对象（TouchEvent）")]),t._v(" "),s("p",[t._v("TouchEvent 是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少，等等")]),t._v(" "),s("p",[t._v("touchstart、touchmove、touchend 三个事件都会各自有事件对象。")]),t._v(" "),s("p",[t._v("触摸事件对象重点我们看三个常见对象列表：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(782),alt:"图片2"}})]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("因为平时我们都是给元素注册触摸事件，所以重点记住 targetTocuhes")])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-3-案例-移动端拖动元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-案例-移动端拖动元素"}},[t._v("#")]),t._v(" 1.3.3.案例：移动端拖动元素")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("touchstart、touchmove、touchend可以实现拖动元素")])]),t._v(" "),s("li",[s("p",[t._v("但是拖动元素需要当前手指的坐标值 我们可以使用  targetTouches[0] 里面的pageX 和 pageY")])]),t._v(" "),s("li",[s("p",[t._v("移动端拖动的原理：    手指移动中，计算出手指移动的距离。然后用盒子原来的位置 + 手指移动的距离")])]),t._v(" "),s("li",[s("p",[t._v("手指移动的距离：  手指滑动中的位置 减去  手指刚开始触摸的位置")]),t._v(" "),s("p",[t._v("拖动元素三步曲：")]),t._v(" "),s("p",[t._v("（1） 触摸元素 touchstart： 获取手指初始坐标，同时获得盒子原来的位置")]),t._v(" "),s("p",[t._v("（2） 移动手指 touchmove： 计算手指的滑动距离，并且移动盒子")]),t._v(" "),s("p",[t._v("（3） 离开手指 touchend:")]),t._v(" "),s("p",[s("code",[t._v("注意： 手指移动也会触发滚动屏幕所以这里要阻止默认的屏幕滚动 e.preventDefault();")])]),t._v(" "),s("p",[t._v("​")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);