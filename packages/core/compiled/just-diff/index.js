(function(){var e={300:function(e){e.exports={diff:diff,jsonPatchPathConverter:jsonPatchPathConverter};function diff(e,r,t){if(!e||typeof e!="object"||!r||typeof r!="object"){throw new Error("both arguments must be objects or arrays")}t||(t=function(e){return e});function getDiff(e,r,a,n){var o=Object.keys(e);var c=o.length;var i=Object.keys(r);var f=i.length;var u;for(var p=0;p<c;p++){var s=Array.isArray(e)?Number(o[p]):o[p];if(!(s in r)){u=a.concat(s);n.remove.push({op:"remove",path:t(u)})}}for(var p=0;p<f;p++){var s=Array.isArray(r)?Number(i[p]):i[p];var v=e[s];var _=r[s];if(!(s in e)){u=a.concat(s);var h=r[s];n.add.push({op:"add",path:t(u),value:h})}else if(v!==_){if(Object(v)!==v||Object(_)!==_){u=pushReplace(u,a,s,n,t,r)}else{if(!Object.keys(v).length&&!Object.keys(_).length&&String(v)!=String(_)){u=pushReplace(u,a,s,n,t,r)}else{getDiff(e[s],r[s],a.concat(s),n)}}}}return n.remove.reverse().concat(n.replace).concat(n.add)}return getDiff(e,r,[],{remove:[],replace:[],add:[]})}function pushReplace(e,r,t,a,n,o){e=r.concat(t);a.replace.push({op:"replace",path:n(e),value:o[t]});return e}function jsonPatchPathConverter(e){return[""].concat(e).join("/")}}};var r={};function __nccwpck_require__(t){var a=r[t];if(a!==undefined){return a.exports}var n=r[t]={exports:{}};var o=true;try{e[t](n,n.exports,__nccwpck_require__);o=false}finally{if(o)delete r[t]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(300);module.exports=t})();