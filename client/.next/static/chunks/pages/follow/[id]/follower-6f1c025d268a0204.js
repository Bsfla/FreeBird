(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{8434:function(n,r,t){"use strict";t.d(r,{$7:function(){return u},ET:function(){return e},GC:function(){return l},vT:function(){return a}});var o=t(889),e=function(n){var r=n.lastId,t=n.paramId;return o.Z.get({url:"follow/".concat(t,"/followers"),params:{lastId:r}})},u=function(n){var r=n.lastId,t=n.paramId;return o.Z.get({url:"follow/".concat(t,"/followings"),params:{lastId:r}})},l=function(n){return o.Z.delete({url:"follow/".concat(n,"/follower")})},a=function(){return o.Z.get({url:"follow/unfollowing"})}},1640:function(n,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return w}});t(7294);var o=t(1233),e=t(8767),u=t(463),l=t(4981),a=t(8434),f=t(1163),i=t(6016),c=t(4266),s=t(5893),d=function(){var n=(0,f.useRouter)(),r=Number(n.query.id),t=(0,e.useQueryClient)(),d=(0,u.VY)().showAlert,w=((0,u.dd)(c.P.CONFIRM_REMOVE).showModal,(0,u.MQ)(l.a.follower,a.ET,r)),_=w.ref,E=w.resultData,v=(0,e.useMutation)(a.GC,{onSuccess:function(){d(i.e.FOLLOWER_DELETE),t.invalidateQueries(l.a.follower)},onError:function(n){alert(n)}}).mutate;return(0,s.jsx)(s.Fragment,{children:E&&(0,s.jsx)(o._,{followUsers:E,handleDeleteFollow:function(n){return function(){v(n)}},endUserList:_})})};d.getLayout=function(n){return(0,s.jsx)(o.aO,{children:n})};var w=!0;r.default=d},4022:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/follow/[id]/follower",function(){return t(1640)}])}},function(n){n.O(0,[445,885,980,866,874,609,237,937,725,762,815,233,774,888,179],(function(){return r=4022,n(n.s=r);var r}));var r=n.O();_N_E=r}]);