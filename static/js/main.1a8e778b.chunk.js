(this.webpackJsonptasks_from_ignat=this.webpackJsonptasks_from_ignat||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__3dJkY",affair:"Affairs_affair__UsYHW",high:"Affairs_high__3sqCY",middle:"Affairs_middle__2U1-k",low:"Affairs_low__1QHOj",delete_button:"Affairs_delete_button__3TJKt",affairs_wrapper:"Affairs_affairs_wrapper__1uiOy"}},,function(e,t,n){e.exports={navbar:"Header_navbar__3SHlW",active:"Header_active__Px1lZ",navbar_square:"Header_navbar_square__288Ut"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__ecW4g",error:"Greeting_error__1_lmA",no_error:"Greeting_no_error__3waxk",input:"Greeting_input__kr7vW",error_message:"Greeting_error_message__lyqAX",wrapper:"Greeting_wrapper__3UgTd"}},,,function(e,t,n){e.exports={message_wrapper:"Message_message_wrapper__1Flo3",userName_text_time:"Message_userName_text_time__2lrqL",userName_text:"Message_userName_text__Qf9pj",time:"Message_time__2YjpS"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3rlWB",errorInput:"SuperInputText_errorInput__qRc2H",error:"SuperInputText_error__3c-qi"}},,,,,function(e,t,n){e.exports={blue:"HW4_blue__2AvlA",column:"HW4_column__3K1Si",testSpanError:"HW4_testSpanError__3Nukz"}},function(e,t,n){e.exports={default:"SuperButton_default__2UF7P",red:"SuperButton_red__14vFq"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2lp2O",spanClassName:"SuperCheckbox_spanClassName__1YwUd"}},,,,function(e,t,n){e.exports={App:"App_App__1mepC"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(26),s=n.n(c),i=(n(34),n(27)),o=n.n(i),j=n(9),l=n(10),u=n.n(l),b=n(0);var d=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:u.a.navbar,children:[Object(b.jsx)(j.b,{to:"/pre-junior",activeClassName:u.a.active,children:"pre-junior"}),Object(b.jsx)(j.b,{to:"/junior",activeClassName:u.a.active,children:"junior"}),Object(b.jsx)(j.b,{to:"/junior+",activeClassName:u.a.active,children:"junior+"}),Object(b.jsx)("span",{className:u.a.navbar_square})]})})},O=n(3),h=n(14),x=n.n(h);var p=function(e){return Object(b.jsxs)("div",{className:x.a.message_wrapper,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(b.jsxs)("div",{className:x.a.userName_text_time,children:[Object(b.jsxs)("div",{className:x.a.userName_text,children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("p",{children:e.message})]}),Object(b.jsx)("div",{className:x.a.time,children:e.time})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="George",_="\u043f\u0435\u0440\u0432\u0443\u044e \u0434\u043e\u043c\u0430\u0448\u043a\u0443 \u043e\u0442 \u0418\u0433\u043d\u0430\u0442\u0430 \u0441\u0434\u0435\u043b\u0430\u043b?",v="22:00";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(p,{avatar:f,name:m,message:_,time:v}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},C=n(2),k=n(8),N=n.n(k);var w=function(e){var t="high"===e.affair.priority?N.a.high:"middle"===e.affair.priority?N.a.middle:N.a.low;return Object(b.jsxs)("div",{className:N.a.affair,children:[Object(b.jsxs)("div",{children:[" ",e.affair.name]}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{className:t,children:"[".concat(e.affair.priority,"]")})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:N.a.delete_button,children:"X"})})]})};var y=function(e){var t=e.data.map((function(t){return Object(b.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:N.a.affairs_wrapper,children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(r.useState)(S),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],j=function(e,t){switch(t){case"low":return e.filter((function(e){return"low"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"high":return e.filter((function(e){return"high"===e.priority}));default:return e}}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},T=n(29),F=n(11),q=n.n(F),E=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.addUserOnKeyPress,i="name is require"===a?q.a.error:q.a.no_error;return Object(b.jsxs)("div",{className:q.a.wrapper,children:[Object(b.jsx)("input",{value:t,onChange:n,className:"".concat(i," ").concat(q.a.input),onKeyPress:s}),Object(b.jsx)("button",{onClick:r,children:"add"}),Object(b.jsx)("span",{children:"Total users: ".concat(c)}),Object(b.jsx)("div",{className:q.a.error_message,children:a})]})},H=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(C.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(C.a)(o,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(E,{name:s,setNameCallback:function(e){" "===e.currentTarget.value?u("name is require"):" "!==e.currentTarget.value&&(u(""),i(e.currentTarget.value))},addUserOnKeyPress:function(e){"Enter"===e.key&&s.length>0?(n(s),u(""),alert("Hello ".concat(s," !")),i("")):"Enter"===e.key&&u("name is require")},error:l,addUser:function(){0===s.length?u("name is require"):(n(s),u(""),alert("Hello ".concat(s," !")),i(""))},totalUsers:d})},U=n(43);var I=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(H,{users:n,addUserCallback:function(e){var t={_id:Object(U.a)(),name:e};a([].concat(Object(T.a)(n),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},P=n(4),W=n(5),B=n(16),G=n.n(B),K=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(G.a.error," ").concat(i||""),l="".concat(c?G.a.errorInput:G.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(b.jsx)("span",{className:j,children:c})]})},M=n(21),J=n.n(M),D=n(22),Y=n.n(D),L=function(e){var t=e.red,n=e.className,r=Object(W.a)(e,["red","className"]),a="".concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(b.jsx)("button",Object(P.a)({className:a},r))},X=n(23),z=n.n(X),Q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(b.jsx)("span",{className:z.a.spanClassName,children:a})]})};var R=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1],c=n.trim()?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:J.a.column,children:[Object(b.jsx)(K,{value:n,onChangeText:a,onEnter:s,error:c}),Object(b.jsx)(K,{className:J.a.blue}),Object(b.jsx)(L,{children:"default"}),Object(b.jsx)(L,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(L,{disabled:!0,children:"disabled"}),Object(b.jsx)(Q,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(Q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],l=a||{},u=l.children,d=l.onDoubleClick,O=l.className,h=Object(W.a)(l,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(K,Object(P.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(b.jsx)("span",Object(P.a)(Object(P.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:u||c.value}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function V(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}$("test",{x:"A",y:1});V("test",{x:"",y:0});var ee=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(Z,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(L,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(b.jsx)(L,{onClick:function(){a(V("editable-span-value",n))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(A,{}),Object(b.jsx)(I,{}),Object(b.jsx)(R,{}),Object(b.jsx)(ee,{})]})};var ne=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},re=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),r=Object(W.a)(e,["options","onChange","onChangeOption"]),a=t.map((function(e,t){return Object(b.jsx)("option",{children:e},t)}));return Object(b.jsx)("select",Object(P.a)(Object(P.a)({onChange:function(e){n(e.currentTarget.value)}},r),{},{children:a}))},ae=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=(e.onChange,e.onChangeOption),c=(Object(W.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",onChange:c,name:t,value:"radio-"+n,checked:r==="radio-"+n}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:s})},ce=["x","y","z"];var se=function(){var e=Object(r.useState)(ce[0]),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(re,{options:ce,value:n,onChangeOption:a})}),Object(b.jsx)("div",{children:Object(b.jsx)(ae,{name:"radio",options:ce,value:n,onChangeOption:a})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ie=function(e,t){var n=e.map((function(e){return Object(P.a)({},e)}));switch(t.type){case"sort":return"up"===t.payload?n.sort((function(e,t){return e.name>t.name?1:-1})):n.sort((function(e,t){return e.name<t.name?1:-1}));case"check":return n.filter((function(e){return e.age>18}));default:return e}},oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var je=function(){var e=Object(r.useState)(oe),t=Object(C.a)(e,2),n=t[0],a=t[1],c=n.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.age})]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Age"})]}),c]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(L,{onClick:function(){return a(ie(oe,{type:"sort",payload:"up"}))},children:"sort up"}),Object(b.jsx)(L,{onClick:function(){return a(ie(oe,{type:"sort",payload:"down"}))},children:"sort down"}),Object(b.jsx)(L,{onClick:function(){return a(ie(oe,{type:"check",payload:18}))},children:"check 18"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var le=function(){var e=Object(r.useState)(0),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),s=Object(C.a)(c,2),i=s[0],o=s[1],j=Object(r.useState)(!1),l=Object(C.a)(j,2),u=l[0],d=l[1],O=function(){clearTimeout(n)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:"".concat("Time"," : ").concat(i?i.toLocaleTimeString():"")}),u&&Object(b.jsx)("div",{children:"".concat("Date"," : ").concat(i?i.toDateString():"")}),Object(b.jsx)(L,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(b.jsx)(L,{onClick:O,children:"stop"})]})};var ue=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(le,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var be=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(se,{}),Object(b.jsx)(je,{}),Object(b.jsx)(ue,{})]})};var de=function(){return Object(b.jsx)("div",{children:"-- in progress --"})},Oe="/pre-junior",he="/junior",xe="/junior+";var pe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(O.a,{to:Oe})}}),Object(b.jsx)(O.b,{path:Oe,render:function(){return Object(b.jsx)(te,{})}}),Object(b.jsx)(O.b,{path:he,render:function(){return Object(b.jsx)(be,{})}}),Object(b.jsx)(O.b,{path:xe,render:function(){return Object(b.jsx)(de,{})}}),Object(b.jsx)(O.b,{render:function(){return Object(b.jsx)(ne,{})}})]})})};var fe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(pe,{})]})})};var me=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(fe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.1a8e778b.chunk.js.map