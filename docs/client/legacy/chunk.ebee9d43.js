import{s as n,o as t}from"./chunk.d24a4e47.js";function r(r){var u,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=[];function o(t){if(n(r,t)){if(r=t,!u)return;i.forEach(function(n){return n[1]()}),i.forEach(function(n){return n[0](r)})}}return{set:o,update:function(n){o(n(r))},subscribe:function(n){var f=[n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:t];return i.push(f),1===i.length&&(u=e(o)||t),n(r),function(){var n=i.indexOf(f);-1!==n&&i.splice(n,1),0===i.length&&(u(),u=null)}}}}export{r as w};
//# sourceMappingURL=chunk.ebee9d43.js.map