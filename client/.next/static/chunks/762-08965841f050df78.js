"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{889:function(t,n,e){var r=e(9499),o=e(196),u=e(1137);function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var c=o.ZP.create({baseURL:"".concat("https://freebirdapp.site","/api"),withCredentials:!0}),s=function(t,n){return function(e){return t.interceptors.response.use((function(t){return t.data?t.data:t}),(function(t){return t})),t(a(a({},e),{},{method:n}))}};n.Z={get:s(c,u.W.GET),post:s(c,u.W.POST),patch:s(c,u.W.PATCH),put:s(c,u.W.PUT),delete:s(c,u.W.DELETE)}},8693:function(t,n,e){e.d(n,{DF:function(){return i},Hi:function(){return c},YF:function(){return a},Yr:function(){return u},li:function(){return o}});var r=e(889),o=function(t){return r.Z.get({url:"/comment/".concat(t)})},u=function(t){var n=t.postId,e=t.content;return r.Z.post({url:"/comment/".concat(n),data:{content:e}})},i=function(t){var n=t.postId,e=t.content;return r.Z.patch({url:"/comment/".concat(n),data:{content:e}})},a=function(t){return r.Z.delete({url:"/comment/".concat(t)})},c=function(t){var n=t.postId,e=t.content;return r.Z.post({url:"/comment/".concat(n,"/reply"),data:{content:e}})}},2714:function(t,n,e){e.d(n,{B9:function(){return p},Jq:function(){return i},Nk:function(){return d},a6:function(){return u},cl:function(){return a},dE:function(){return l},dq:function(){return s},fR:function(){return f},qb:function(){return o},xl:function(){return c}});var r=e(889),o=function(t){return r.Z.post({url:"/post",data:t})},u=function(t){return r.Z.post({url:"/post/images",data:t})},i=function(t){var n=t.lastId;return r.Z.get({url:"/posts",params:{lastId:n}})},a=function(t){var n=t.lastId,e=t.paramId;return r.Z.get({url:"/posts/".concat(e),params:{lastId:n}})},c=function(t){return r.Z.get({url:"/post/".concat(t)})},s=function(t){var n=t.postId,e=t.data;return r.Z.patch({url:"/post/".concat(n),data:e})},f=function(t){return r.Z.delete({url:"/post/".concat(t)})},l=function(t){return r.Z.patch({url:"/post/".concat(t,"/like")})},d=function(t){return r.Z.delete({url:"/post/".concat(t,"/like")})},p=function(t){return r.Z.post({url:"/post/".concat(t,"/Retweet")})}},6748:function(t,n,e){e.d(n,{Ai:function(){return o},MX:function(){return i},s2:function(){return u}});var r=e(889),o=function(t){return r.Z.get({url:"/profile/".concat(t)})},u=function(t){var n=t.formData,e=t.userId;return r.Z.patch({url:"/profile/".concat(e),data:n})},i=function(t){var n=t.lastId,e=t.paramId;return r.Z.get({url:"/profile/posts/".concat(e),params:{lastId:n}})}},6649:function(t,n,e){e.d(n,{P_:function(){return c},kS:function(){return i},uU:function(){return s},x4:function(){return u},y1:function(){return o},zf:function(){return a}});var r=e(889),o=function(t){return r.Z.post({url:"/user",data:t})},u=function(t){return r.Z.post({url:"/user/login",data:t})},i=function(){return r.Z.post({url:"/user/logout"})},a=function(){return r.Z.get({url:"/user"})},c=function(t){return r.Z.patch({url:"/user/".concat(t,"/follow")})},s=function(t){return r.Z.delete({url:"/user/".concat(t,"/follow")})}},8913:function(t,n,e){e.d(n,{Z:function(){return l}});e(7294);var r=e(3179),o=e(3055),u=(0,r.Z)("div",{target:"e5qqsyk1"})("display:flex;align-items:center;cursor:pointer;svg{width:40px;height:40px;}span{color:",o.Z.colors.sub,";font-family:",o.Z.font.title,";font-size:30px;margin-left:10px;}"),i=e(1664),a=e.n(i),c=e(423),s=e(9583),f=e(5893),l=function(){return(0,f.jsxs)(u,{children:[(0,f.jsx)(s.G7_,{size:5}),(0,f.jsx)(a(),{href:c.DW,children:(0,f.jsx)("span",{children:"FreeBird"})})]})}},8504:function(t,n,e){e.d(n,{Z:function(){return p}});e(7294);var r,o=e(1383),u=e(3179),i=e(917),a=e(3055);var c=(0,i.F4)(r||(r=(0,o.Z)(["\n  0%, 80%, 100% {\n      transform: scale(0);\n  }\n  40% {\n      transform: scale(1);\n  }\n"]))),s=(0,u.Z)("div",{target:"e2rjhsy2"})({name:"1gv4qbr",styles:"height:100vh;display:flex;justify-content:center"}),f=(0,u.Z)("div",{target:"e2rjhsy1"})("width:1.5rem;height:1.5rem;background-color:",a.Z.colors.sub3,";border-radius:60%;animation:1.5s ",c," infinite ease-in-out both;margin-top:150px;"),l=(0,u.Z)("div",{target:"e2rjhsy0"})({name:"1rd8vxc",styles:"width:100%;height:100vh;display:flex;justify-content:center;align-items:center;overflow:hidden"}),d=e(5893),p=function(){return(0,d.jsx)(l,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(f,{}),(0,d.jsx)(f,{}),(0,d.jsx)(f,{})]})})}},6016:function(t,n,e){e.d(n,{e:function(){return r}});var r={POST_EDIT:"\uac8c\uc2dc\uae00\uc774 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",POST_DELETE:"\uac8c\uc2dc\uae00\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",POST_CREATE:"\uac8c\uc2dc\uae00\uc744 \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4.",POST_SHARE:"\uac8c\uc2dc\uae00\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4",COMMENT_CREATE:"\ub313\uae00\uc744 \uc0dd\uc131\ud588\uc2b5\ub2c8\ub2e4",COMMENT_DELETE:"\ub313\uae00\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",COMMENT_EDIT:"\ub313\uae00\uc744 \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4",FOLLOWING_SUCCESS:"\ud314\ub85c\uc789 \ud588\uc2b5\ub2c8\ub2e4.",FOLLOWING_DELETE:"\ud314\ub85c\uc789\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4",FOLLOWER_DELETE:"\ud314\ub85c\uc6cc\ub97c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4",PROFILE_EDIT:"\ud504\ub85c\ud544\uc744 \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4"}},4266:function(t,n,e){e.d(n,{P:function(){return r}});var r={POST_IMAGE:"PostImage",PROFILE_EDIT:"ProfileEdit",CONFIRM_REMOVE:"ConfirmRemove"}},1137:function(t,n,e){e.d(n,{W:function(){return r}});var r={GET:"get",POST:"post",PATCH:"patch",PUT:"put",DELETE:"delete"}},4981:function(t,n,e){e.d(n,{a:function(){return r}});var r={posts:["posts"],post:"post",comment:"comment",user:"user",profile:"profile",follower:["follower"],following:["following"]}},423:function(t,n,e){e.d(n,{C1:function(){return o},DV:function(){return r},DW:function(){return u},Gi:function(){return c},Hv:function(){return i},Jt:function(){return a},WC:function(){return f},iG:function(){return l},nF:function(){return s},yz:function(){return d}});var r="/login",o="/signup",u="/",i="/post",a="/profile",c="/follow",s="/search",f=function(t){return"/follow/".concat(t,"/following")},l=function(t){return"/follow/".concat(t,"/follower")},d="/findfriend"},7941:function(t,n,e){e.d(n,{fj:function(){return a},iZ:function(){return v},hn:function(){return f}});var r=e(8767),o=e(2714),u=e(463),i=e(6016),a=function(){var t=(0,u.VY)().showAlert,n=(0,r.useQueryClient)();return{mutate:(0,r.useMutation)(o.qb,{onSuccess:function(){t(i.e.POST_CREATE),n.invalidateQueries("posts")},onError:function(t){alert(t)}}).mutate}},c=e(4981),s=e(196),f=function(t){var n=(0,r.useQueryClient)(),e=(0,u.VY)().showAlert,a=(0,r.useMutation)(o.B9,{onSuccess:function(){e(i.e.POST_SHARE),n.invalidateQueries(c.a.posts)},onError:function(t){var n;t instanceof s.d7&&alert(null===(n=t.response)||void 0===n?void 0:n.data)}}).mutate;return{handleSharePost:function(n){n.stopPropagation(),a(t.id)}}},l=e(6748),d=e(4480),p=e(1071),v=function(){var t=(0,r.useQueryClient)(),n=(0,d.Zl)(p.m),e=(0,u.VY)().showAlert;return{mutate:(0,r.useMutation)(l.s2,{onSuccess:function(){t.invalidateQueries(c.a.profile),t.invalidateQueries(c.a.user),t.invalidateQueries(c.a.posts),e(i.e.PROFILE_EDIT),n(!1)},onError:function(t){alert(t)}}).mutate}}},463:function(t,n,e){e.d(n,{VY:function(){return P},vr:function(){return d},MQ:function(){return l},Gl:function(){return a},dd:function(){return O},$P:function(){return b}});var r=e(9499),o=e(7294);function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var a=function(t){var n=(0,o.useState)(t),e=n[0],u=n[1];return{form:e,handleChangeInput:function(t){var n=t.target,o=n.name,a=n.value;u(i(i({},e),{},(0,r.Z)({},o,a)))},setForm:u}},c=e(6835),s=e(8767),f=e(7650),l=function(t,n,e){var r=(0,s.useInfiniteQuery)(t,(function(t){var r=t.pageParam;return n({lastId:void 0===r?0:r,paramId:e})}),{getNextPageParam:function(t){var n;return null===t||void 0===t||null===(n=t[t.length-1])||void 0===n?void 0:n.id}}),u=r.data,i=r.fetchNextPage,a=r.hasNextPage,l=r.isFetching,d=r.isLoading,p=(0,f.YD)(),v=(0,c.Z)(p,2),g=v[0],h=v[1],m=null===u||void 0===u?void 0:u.pages.flat();return(0,o.useEffect)((function(){var t;u&&(!((null===(t=u.pages)||void 0===t?void 0:t[u.pages.length-1].length)<10)&&a&&h&&i())}),[h]),{ref:g,resultData:m,isFetching:l,isLoading:d}},d=function(t){var n=(0,o.useState)(0),e=n[0],r=n[1],u=(0,o.useState)(null),i=u[0],a=u[1],c=(0,o.useState)(0),s=c[0],f=c[1],l=o.Children.count(t),d=function(){r(e!=l-1?function(t){return t+1}:l-1)},p=function(){r(0!=e?function(t){return t-1}:0)};return{currentSlide:e,slideLength:l,handleNextSlide:function(t){t.stopPropagation(),d()},handlePrevSlide:function(t){t.stopPropagation(),p()},handleMoveSelectSlide:function(t){return function(n){n.stopPropagation(),r(t)}},handleTouchMove:function(t){t.stopPropagation();if(null!==i){var n=i-t.touches[0].clientX;n>3?d():n<-3&&p()}},handleTouchStart:function(t){t.stopPropagation();var n=t.touches[0].clientX;a(n)},handleMouseDown:function(t){f(t.clientX)},handleMouseMove:function(t){s&&(s>t.clientX?d():s<t.clientX&&p())}}},p=e(4480),v=e(1071),g=(0,p.CG)({key:"modalSelector",get:function(t){return function(n){return(0,n.get)(v.E).filter((function(n){return n.name===t}))[0]}}});function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var O=function(t){var n=(0,p.FV)(v.E),e=(0,c.Z)(n,2),r=e[0],u=e[1],i=(0,p.sJ)(g(t)),a=i.isShow;return(0,o.useEffect)((function(){a?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow")}),[a]),{isShow:a,showModal:function(){u(r.map((function(n){return m(m({},n),{},{isShow:n.name===t})})))},hideModal:function(){u(r.map((function(n){return m(m({},n),{},{isShow:n.name!==t&&n.isShow})})))},showImageModal:function(n){u(r.map((function(e){return m(m({},e),{},{isShow:e.name===t,images:n})})))},modal:i}},E=(0,p.cn)({key:"alert",default:{isOpen:!1,message:""}}),P=function(){var t=(0,p.FV)(E),n=(0,c.Z)(t,2),e=n[0],r=n[1];return{isOpen:e.isOpen,message:e.message,showAlert:function(t){r({isOpen:!0,message:t})},hideAlert:function(){r({isOpen:!1,message:""})}}},y=e(1163),b=function(){var t=(0,o.useState)(!1),n=t[0],e=t[1];return(0,o.useEffect)((function(){var t=function(){e(!0)},n=function(){e(!1)};return y.Router.events.on("routeChangeStart",t),y.Router.events.on("routeChangeComplete",n),y.Router.events.on("routeChangeError",n),function(){y.Router.events.off("routeChangeStart",t),y.Router.events.off("routeChangeComplete",n),y.Router.events.off("routeChangeError",n)}}),[]),{loading:n}}},1535:function(t,n,e){e.d(n,{$P:function(){return r.$P},Gl:function(){return r.Gl},MQ:function(){return r.MQ},dd:function(){return r.dd},gM:function(){return o.gM},hn:function(){return u.hn},iZ:function(){return u.iZ}});var r=e(463),o=e(39),u=e(7941)},39:function(t,n,e){e.d(n,{bN:function(){return j},us:function(){return M},Bn:function(){return w},f0:function(){return h},gM:function(){return P},T4:function(){return g}});var r=e(9499),o=e(29),u=e(7794),i=e.n(u),a=e(7294),c=e(1163),s=e(6649),f=e(196),l=e(423),d=e(9461);function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var g=function(){var t=(0,a.useState)({content:"",errorMessage:""}),n=t[0],e=t[1],r=(0,a.useState)({content:"",errorMessage:""}),u=r[0],p=r[1],g=(0,a.useState)({content:"",errorMessage:""}),h=g[0],m=g[1],O=(0,a.useState)({content:"",errorMessage:""}),E=O[0],P=O[1],y=(0,c.useRouter)(),b=""===n.errorMessage&&""===h.errorMessage&&""===u.errorMessage&&""===E.errorMessage,w=function(){var t=(0,o.Z)(i().mark((function t(e){var r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,(0,s.y1)({email:n.content,nickname:h.content,password:u.content});case 4:if(r=t.sent,403!==(null===(o=r.response)||void 0===o?void 0:o.status)){t.next=8;break}return t.abrupt("return",alert("\uc774\ubbf8 \ub4f1\ub85d\ub418\uc5b4 \uc788\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4."));case 8:alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4"),y.push(l.DV),t.next=16;break;case 12:if(t.prev=12,t.t0=t.catch(1),!(t.t0 instanceof f.d7)){t.next=16;break}return t.abrupt("return",alert("\uc774\ubbf8 \ub4f1\ub85d\ub418\uc5b4 \uc788\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4"));case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(n){return t.apply(this,arguments)}}();return{email:n,isDisabled:b,password:u,passwordConfirm:E,nickname:h,handleSignup:w,handleChangeEmail:function(t){e({content:t.target.value,errorMessage:(0,d.oH)(t.target.value)})},handleChangeNickname:function(t){m({content:t.target.value,errorMessage:(0,d.cV)(t.target.value)})},handleChangePassword:function(t){p({content:t.target.value,errorMessage:(0,d.uo)(t.target.value)}),E.content&&P(v(v({},E),{},{errorMessage:(0,d.Yp)(t.target.value,E.content)}))},handleChangePasswordConfirm:function(t){P({content:t.target.value,errorMessage:(0,d.Yp)(u.content,t.target.value)})}}},h=function(){var t=(0,a.useState)(""),n=t[0],e=t[1],r=(0,a.useState)(""),u=r[0],p=r[1],v=(0,a.useState)(""),g=v[0],h=v[1],m=(0,a.useState)(""),O=m[0],E=m[1],P=(0,c.useRouter)(),y=""==g&&""==O&&n.length>0&&u.length>0,b=function(){var t=(0,o.Z)(i().mark((function t(e){var r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,(0,s.x4)({email:n,password:u});case 4:if(r=t.sent,401!==(null===(o=r.response)||void 0===o?void 0:o.status)){t.next=8;break}return t.abrupt("return",alert("\uc544\uc774\ub514\uc640 \ube44\ubc00 \ubc88\ud638\ub97c \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694."));case 8:P.push(l.DW),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),f.ZP.isAxiosError(t.t0)&&alert(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}();return{email:n,password:u,isDisabled:y,handleLogin:b,handleChangeEmail:function(t){e(t.target.value),h((0,d.oH)(t.target.value))},handleChangePassword:function(t){p(t.target.value),E((0,d.uo)(t.target.value))},emailError:g,passwordError:O}},m=e(4981),O=e(8767),E=e(2714),P=function(t){var n={id:1},e=(0,O.useQueryClient)(),r=t.Likers.find((function(t){return t.id===(null===n||void 0===n?void 0:n.id)})),o=(0,O.useMutation)(E.dE,{onMutate:function(){n&&e.setQueryData(m.a.posts,(function(e){var r=null===e||void 0===e?void 0:e.pages.flat().find((function(n){return n.id===t.id}));return r&&r.Likers.push({id:n.id}),{pageParams:(null===e||void 0===e?void 0:e.pageParams)||[],pages:(null===e||void 0===e?void 0:e.pages)||[]}}))},onSuccess:function(){e.invalidateQueries(m.a.post)}}).mutate,u=(0,O.useMutation)(E.Nk,{onMutate:function(){n&&e.setQueryData(m.a.posts,(function(n){var e=null===n||void 0===n?void 0:n.pages.flat(),r=null===e||void 0===e?void 0:e.find((function(n){return n.id===t.id}));if(r){var o=r.Likers.findIndex((function(n){return n.id===t.id}));r.Likers.splice(o,1)}return{pageParams:(null===n||void 0===n?void 0:n.pageParams)||[],pages:(null===n||void 0===n?void 0:n.pages)||[]}}))},onSuccess:function(){e.invalidateQueries(m.a.post)}}).mutate;return{isLike:r,handleAddLike:function(n){n.stopPropagation(),o(t.id)},handleDeleteLike:function(n){n.stopPropagation(),u(t.id)}}},y=e(463),b=e(6016),w=function(){var t=(0,O.useQueryClient)(),n=(0,y.VY)().showAlert,e=(0,O.useMutation)(E.dq,{onSuccess:function(){n(b.e.POST_EDIT),t.invalidateQueries("posts"),t.invalidateQueries("post")},onError:function(t){alert(t)}});return{mutate:e.mutate,isSuccess:e.isSuccess}},S=e(8693),j=function(){var t=(0,O.useQueryClient)(),n=(0,y.VY)().showAlert;return{mutate:(0,O.useMutation)(S.Yr,{onSuccess:function(){n(b.e.COMMENT_CREATE),t.invalidateQueries(m.a.comment)},onError:function(t){alert(t)}}).mutate}},M=function(){var t=(0,O.useQueryClient)(),n=(0,y.VY)().showAlert,e=(0,O.useMutation)(S.DF,{onSuccess:function(){n(b.e.COMMENT_EDIT),t.invalidateQueries(m.a.comment)}});return{mutate:e.mutate,isSuccess:e.isSuccess}}},9461:function(t,n,e){e.d(n,{Bq:function(){return i},Xy:function(){return r},oH:function(){return a},cV:function(){return s},uo:function(){return c},Yp:function(){return f}});var r=function(t){return"".concat(t)},o=e(381),u=e.n(o),i=function(t){return u()(t).format("YYYY-MM-DD")},a=function(t){return!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(t)&&t.length>0?"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \ub2e4\ub985\ub2c8\ub2e4.":t.length<1?"\uc774\uba54\uc77c\uc740 \ud544\uc218 \uc785\ub825\uc785\ub2c8\ub2e4":""},c=function(t){return 0===t.length?"\ube44\ubc00\ubc88\ud638\ub294 \ud544\uc218\uc785\ub825 \uc785\ub2c8\ub2e4.":""},s=function(t){return 0===t.length?"\ub2c9\ub124\uc784\uc740 \ud544\uc218\uc785\ub825 \uc785\ub2c8\ub2e4.":t.length>4?"\ub2c9\ub124\uc784\uc740 4\uae00\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.":""},f=function(t,n){return t!==n?"\ube44\ubc00\ubc88\ud638\uac00 \ub2e4\ub985\ub2c8\ub2e4":""}},1071:function(t,n,e){e.d(n,{E:function(){return i},m:function(){return u}});var r=e(4266),o=e(4480),u=(0,o.cn)({key:"modal",default:!1}),i=(0,o.cn)({key:"modalList",default:[{name:r.P.POST_IMAGE,isShow:!1,images:[]},{name:r.P.PROFILE_EDIT,isShow:!1},{name:r.P.CONFIRM_REMOVE,isShow:!1}]})}}]);