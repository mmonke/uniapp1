(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-video-video"],{"463b":function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,"uni-video[data-v-1e396797]{width:%?690?%;width:100%;height:400px}",""]),t.exports=n},"7b6f":function(t,n,e){"use strict";e.r(n);var i=e("b076"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"8cc5":function(t,n,e){"use strict";e.r(n);var i=e("c449"),a=e("7b6f");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("dd17");var u=e("828b"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1e396797",null,!1,i["a"],void 0);n["default"]=s.exports},ac32:function(t,n,e){var i=e("463b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("6056c914",i,!0,{sourceMap:!1,shadowMode:!1})},b076:function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("c9b5"),e("bf0f"),e("ab80"),e("aa9c");var i={data:function(){return{title:"video",src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:"",showVideo:!1}},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo"),this.showVideo=!0},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var t=[],n=0;n<3;++n){var e=Math.floor(256*Math.random()).toString(16);e=1==e.length?"0"+e:e,t.push(e)}return"#"+t.join("")}}};n.default=i},c449:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={pageHead:e("855f").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),t.showVideo?e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",[e("v-uni-video",{attrs:{id:"myVideo",src:"https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4","danmu-list":t.danmuList,"enable-danmu":!0,"danmu-btn":!0,controls:!0,poster:"https://web-assets.dcloud.net.cn/unidoc/zh/poster.png"},on:{error:function(n){arguments[0]=n=t.$handleEvent(n),t.videoErrorCallback.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"uni-list uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",[e("v-uni-view",{staticClass:"uni-label"},[t._v("弹幕内容")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"在此处输入弹幕内容"},model:{value:t.danmuValue,callback:function(n){t.danmuValue=n},expression:"danmuValue"}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"page-body-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.sendDanmu.apply(void 0,arguments)}}},[t._v("发送弹幕")])],1)],1):t._e()],1)},o=[]},dd17:function(t,n,e){"use strict";var i=e("ac32"),a=e.n(i);a.a}}]);