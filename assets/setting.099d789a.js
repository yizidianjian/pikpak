import{d as O,r as E,p as U,o as J,a as P,b as B,s as w,e as u,f as t,ax as $,w as a,ay as c,E as l,al as f,I as h,az as k,R as m,Q as v,am as r,aA as D,c as z,ak as L,D as A,ao as y,T as V,ad as R,aB as G,y as i}from"./vendor.64da71ad.js";import{p as b,i as M}from"./index.c752785d.js";var Q="/yizidianjianpikpak/assets/aria2-tip-1.e9ebfae4.png",H="/yizidianjianpikpak/assets/aria2-tip-2.f3636f8d.png";const Z={class:"list-page"},q=i(" \u7ED1\u5B9Atelegram "),K=l("p",null,null,-1),W=i("Telegram\u7ED1\u5B9A"),X=l("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),Y=i("aria2\u8BBE\u7F6E "),ee=i("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),ue=i("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),te=l("img",{src:Q,alt:""},null,-1),ae=l("br",null,null,-1),le=l("br",null,null,-1),oe=l("img",{src:H,alt:""},null,-1),se=i("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),ne=i("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E "),ie=i("\u4FDD\u5B58"),re=l("p",null,null,-1),de=i("\u4FDD\u5B58\u8BBE\u7F6E"),pe=i("\u6062\u590D\u9ED8\u8BA4"),Fe=l("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),Ee=l("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),ce=l("a",{href:"https://github.com/mumuchenchen/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),me=l("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),_e=l("a",{href:"https://t.me/mumuchenchen",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),ge=l("br",null,null,-1),he=O({setup(ve){const C=E(["\u624B\u673A\u6CE8\u518C\u767B\u9646","\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7EBF\uFF09","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),o=E({host:"",token:"",dir:!0}),x=()=>{let n={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};o.value.token&&n.params.splice(0,0,"token:"+o.value.token),fetch(o.value.host,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})}).then(e=>e.json()).then(e=>{e.error&&e.error.message?window.$message.error(e.error.message):e.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(o.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(e=>console.error("Error:",e))},_=E(!1),d=E({username:"",password:""}),S=U(),N=()=>{_.value?S.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(d.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},g=E(""),I=()=>{let n=g.value.split(`
`).filter(e=>e!="");window.localStorage.setItem("proxy",JSON.stringify(n)),window.localStorage.setItem("isSettingProxy","true")},T=()=>{window.localStorage.setItem("proxy",JSON.stringify(b)),window.localStorage.removeItem("isSettingProxy"),g.value=b.join(`
`)};J(()=>{let n=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");n.dir===void 0&&(n.dir=!0),n.host&&(o.value=n);let e=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");e.username&&e.password&&(d.value=e,_.value=!0);let F=JSON.parse(window.localStorage.getItem("proxy")||"[]");F.length&&(g.value=F.join(`
`))});const p=E(),j=()=>{let n=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!n&&!n.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let e=p.value&&decodeURIComponent(p.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(e),!e||!e.length||e.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;M.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:n.access_token,thirdType:"TG",thirdToken:e[2]}).then(F=>{p.value="",F.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(n,e)=>{const F=P("n-text");return B(),w("div",Z,[u(t($),{"default-expanded-names":["-1","0","2","3"]},{default:a(()=>[u(t(c),{name:"-1"},{header:a(()=>[q,l("a",{onClick:e[0]||(e[0]=k(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank"},[u(t(h),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[u(t(f))]),_:1})])]),default:a(()=>[u(t(m),{value:p.value,"onUpdate:value":e[1]||(e[1]=s=>p.value=s),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),K,u(t(v),{disabled:!p.value,type:"primary",onClick:j},{default:a(()=>[W]),_:1},8,["disabled"]),X]),_:1}),u(t(c),{name:"0",title:"aria2\u8BBE\u7F6E"},{header:a(()=>[Y,l("a",{onClick:e[2]||(e[2]=k(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#arai2",target:"_blank"},[u(t(h),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[u(t(f))]),_:1})])]),default:a(()=>[u(t(y),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[u(t(r),{label:"aria2\u94FE\u63A5\uFF1A"},{default:a(()=>[u(t(m),{value:o.value.host,"onUpdate:value":e[3]||(e[3]=s=>o.value.host=s),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),u(t(r),{label:"aria2Token\uFF1A"},{default:a(()=>[u(t(m),{value:o.value.token,"onUpdate:value":e[4]||(e[4]=s=>o.value.token=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),u(t(r),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:a(()=>[u(t(D),{value:o.value.dir,"onUpdate:value":e[5]||(e[5]=s=>o.value.dir=s)},{checked:a(()=>[ee]),unchecked:a(()=>[ue]),_:1},8,["value"])]),_:1}),o.value.host&&o.value.host.indexOf("https://")===-1&&o.value.host.indexOf("http://localhost")==-1&&o.value.host.indexOf("http://127.0.0.1")===-1?(B(),z(t(L),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:a(()=>[te,ae,le,oe]),_:1})):A("",!0),u(t(r),null,{default:a(()=>[u(t(v),{type:"primary",onClick:x},{default:a(()=>[se]),_:1})]),_:1})]),_:1})]),_:1}),u(t(c),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:a(()=>[ne,l("a",{onClick:e[6]||(e[6]=k(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#i-6",target:"_blank"},[u(t(h),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[u(t(f))]),_:1})])]),default:a(()=>[u(t(y),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[u(t(r),{label:"\u662F\u5426\u5F00\u542F"},{default:a(()=>[u(t(D),{value:_.value,"onUpdate:value":e[7]||(e[7]=s=>_.value=s)},null,8,["value"])]),_:1}),_.value?(B(),w(V,{key:0},[u(t(r),{label:"\u7528\u6237\u540D"},{default:a(()=>[u(t(m),{value:d.value.username,"onUpdate:value":e[8]||(e[8]=s=>d.value.username=s),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),u(t(r),{label:"\u5BC6\u7801"},{default:a(()=>[u(t(m),{value:d.value.password,"onUpdate:value":e[9]||(e[9]=s=>d.value.password=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):A("",!0),u(t(r),null,{default:a(()=>[u(t(v),{type:"primary",onClick:N},{default:a(()=>[ie]),_:1})]),_:1})]),_:1})]),_:1}),u(t(c),{name:"3",title:"\u4EE3\u7406\u8BBE\u7F6E"},{default:a(()=>[u(t(m),{type:"textarea",value:g.value,"onUpdate:value":e[10]||(e[10]=s=>g.value=s),rows:"4",placeholder:"\u652F\u6301\u591A\u4E2A\u968F\u673A\uFF0C\u4E00\u884C\u4E00\u4E2A\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u4EE3\u7406"},null,8,["value"]),re,u(t(v),{type:"primary",onClick:I},{default:a(()=>[de]),_:1}),u(F,{onClick:T},{default:a(()=>[pe]),_:1})]),_:1}),u(t(c),{title:"\u5173\u4E8E",name:"2"},{default:a(()=>[u(t(R),null,{default:a(()=>[Fe,Ee,ce,me,_e]),_:1}),ge]),_:1}),u(t(c),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:a(()=>[u(t(G),{lines:C.value},null,8,["lines"])]),_:1})]),_:1})])}}});export{he as default};
