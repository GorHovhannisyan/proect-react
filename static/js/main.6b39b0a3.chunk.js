(this.webpackJsonpproect=this.webpackJsonpproect||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(41),a=n(3),c="SEND-MESSAGE",s={dialogs:[{id:1,name:"Dimich"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is you it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},126:function(e,t,n){"use strict";t.a=n.p+"static/media/users1.96e310a6.png"},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1jJZB"}},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),a=n(28),c=n(29),s=n(31),i=n(30),o=n(0),u=n.n(o),l=n(12),d=n(9),f=n(1),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(s.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(r.a)({},this.props)):Object(f.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(j)(t)}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(130),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0c128414-0f98-473e-8175-a1db042cf5bc"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t," ")).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e," "),{})},unfollow:function(e){return a.delete("follow/".concat(e," "))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},15:function(e,t,n){e.exports={nav:"Navbar_nav__J2bIT",item:"Navbar_item__1VJwG",activLink:"Navbar_activLink__1reWm"}},245:function(e,t,n){},249:function(e,t,n){},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(11),c=n(10),s=n.n(c),i=n(18),o=n(3),u=n(38),l=n(14),d="samurai-network/auth/SET_USER_DATA",f={userId:null,email:null,login:null,isAuth:!1},j=function(e,t,n,r){return{type:d,payload:{userId:e,email:t,login:n,isAuth:r}}},b=function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,t(j(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}},h=n(104),O=n(95),g={},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return e},v=n(41),x=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},w="FOLLOW",P="UNFOLLOW",C="SET_USERS",_="SET_CURRENT_PAGE",S="SET_TOTAL_USERS_COUNT",y="TOGGLE_IS_FETCHING",k="TOGGLE_IS_FOLLOWING_PROGRES",E={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},I=function(e){return{type:w,userId:e}},N=function(e){return{type:P,userId:e}},T=function(e){return{type:_,currentPage:e}},L=function(e){return{type:y,isFetching:e}},A=function(e,t){return{type:k,isFetching:e,userId:t}},F=function(){var e=Object(i.a)(s.a.mark((function e(t,n,r,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(A(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)(Object(o.a)({},e),{},{users:x(e.users,t.userId,"id",{followed:!0})});case P:return Object(o.a)(Object(o.a)({},e),{},{users:x(e.users,t.userId,"id",{followed:!1})});case C:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case _:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case S:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case y:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case k:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},z=n(131),M=n(129),D="INITIALIZED_SUCCESS",R={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}},B=Object(a.c)({profilePage:O.b,dialogsPage:h.a,sidebar:m,usersPage:U,auth:p,form:M.a,app:G}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,V=Object(a.e)(B,H(Object(a.a)(z.a))),q=n(0),J=n.n(q),W=n(65),Y=n.n(W),K=(n(245),n(28)),X=n(29),Z=n(31),Q=n(30),$=n(12),ee=n(9),te=(n(249),n(42)),ne=n(16),re=n(89),ae=n.n(re),ce=n(1),se=function(e){return Object(ce.jsxs)("header",{className:ae.a.header,children:[Object(ce.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/70/Gulf_logo.png"}),Object(ce.jsx)("div",{className:ae.a.loginBlock,children:e.isAuth?Object(ce.jsxs)("div",{children:[e.login," - ",Object(ce.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(ce.jsx)(ne.b,{to:"/login",children:"Login"})})]})},ie=function(e){Object(Z.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"render",value:function(){return Object(ce.jsx)(se,Object(o.a)({},this.props))}}]),n}(J.a.Component),oe=Object($.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.logout();case 2:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ie),ue=n(127),le=n(85),de=n(37),fe=n(54),je=n.n(fe),be=Object(ue.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(ce.jsxs)("form",{onSubmit:t,children:[Object(de.c)("Email","email",de.a,[le.b]),Object(de.c)("Password","password",de.a,[le.b],{type:"password"}),Object(de.c)(null,"rememberMe",de.a,[],{type:"Checkbox"},"remember me"),n&&Object(ce.jsx)("div",{className:je.a.formSummaryError,children:n}),Object(ce.jsx)("div",{children:Object(ce.jsx)("button",{children:"Login"})})]})})),pe=Object($.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(i.a)(s.a.mark((function r(a){var c,i;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(b()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(u.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(ce.jsx)(ee.a,{to:"/profile"}):Object(ce.jsxs)("div",{children:[Object(ce.jsx)("h1",{children:"Login"}),Object(ce.jsx)(be,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),he=(n(291),function(e){return Object(ce.jsx)("div",{children:"Music"})}),Oe=n(15),ge=n.n(Oe),me=function(){return Object(ce.jsxs)("nav",{className:ge.a.nav,children:[Object(ce.jsx)("div",{className:ge.a.item,children:Object(ce.jsx)(ne.b,{to:"/profile",activeClassName:ge.a.activLink,children:"Profile"})}),Object(ce.jsx)("div",{className:"".concat(ge.a.item," ").concat(ge.a.activ),children:Object(ce.jsx)(ne.b,{to:"/dialogs",activeClassName:ge.a.activLink,children:"Messages"})}),Object(ce.jsx)("div",{className:"".concat(ge.a.item," ").concat(ge.a.activ),children:Object(ce.jsx)(ne.b,{to:"/users",activeClassName:ge.a.activLink,children:"Users"})}),Object(ce.jsx)("div",{className:ge.a.item,children:Object(ce.jsx)(ne.b,{to:"/news",activeClassName:ge.a.activLink,children:"News"})}),Object(ce.jsx)("div",{className:ge.a.item,children:Object(ce.jsx)(ne.b,{to:"music",activeClassName:ge.a.activLink,children:"Music"})}),Object(ce.jsx)("div",{className:ge.a.item,children:Object(ce.jsx)(ne.b,{to:"settings",activeClassName:ge.a.activLink,children:"Settings"})})]})},ve=(n(292),function(e){return Object(ce.jsx)("div",{children:"News"})}),xe=(n(293),function(e){return Object(ce.jsx)("div",{children:"Settings"})}),we=n(56),Pe=n(67),Ce=n(128),_e=n(94),Se=n.n(_e),ye=n(133),ke=n.n(ye),Ee=function(e){for(var t=e.currentPage,n=e.onPageChanged,r=e.totalItemsCount,a=e.pageSize,c=e.portionSize,s=void 0===c?10:c,i=Math.ceil(r/a),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/s),d=Object(q.useState)(1),f=Object(Ce.a)(d,2),j=f[0],b=f[1],p=(j-1)*s+1,h=j*s;return Object(ce.jsxs)("div",{children:[j>1&&Object(ce.jsx)("button",{onClick:function(){b(j-1)},children:"PREV"}),o.filter((function(e){return e>=p&&e<=h})).map((function(e){return Object(ce.jsx)("span",{className:ke()(Object(Pe.a)({},Se.a.selectedPage,t===e),Se.a.pageNumber),onClick:function(t){n(e)},children:e},e)})),l>j&&Object(ce.jsx)("button",{onClick:function(){b(j+1)},children:"NEXT"})]})},Ie=n(134),Ne=n.n(Ie),Te=n(126),Le=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(ce.jsxs)("div",{children:[Object(ce.jsxs)("span",{children:[Object(ce.jsx)("div",{children:Object(ce.jsx)(ne.b,{to:"/profile/"+t.id,children:Object(ce.jsx)("img",{src:null!==t.photos.small?t.photos.small:Te.a,className:Ne.a.userPhoto})})}),Object(ce.jsx)("div",{children:t.followed?Object(ce.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(ce.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(ce.jsxs)("span",{children:[Object(ce.jsx)("div",{children:t.name}),Object(ce.jsx)("div",{children:t.status})]}),Object(ce.jsxs)("span",{children:[Object(ce.jsx)("div",{children:"user.location.country"}),Object(ce.jsx)("div",{children:"user.location.city"})]})]})},Ae=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,c=e.users,s=Object(we.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(ce.jsxs)("div",{children:[Object(ce.jsx)(Ee,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),Object(ce.jsx)("div",{children:c.map((function(e){return Object(ce.jsx)(Le,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))})]})},Fe=(n(136),n(135)),Ue=function(e){return e.usersPage.users},ze=(Object(Fe.a)(Ue,(function(e){return e.filter((function(e){return!0}))})),function(e){return e.usersPage.pageSize}),Me=function(e){return e.usersPage.totalUsersCount},De=function(e){return e.usersPage.currentPage},Re=function(e){return e.usersPage.isFetching},Ge=function(e){return e.usersPage.followingInProgress},Be=function(e){Object(Z.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(ce.jsxs)(ce.Fragment,{children:[this.props.isFetching?Object(ce.jsx)(te.a,{}):null,Object(ce.jsx)(Ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(J.a.Component),He=Object(a.d)(Object($.b)((function(e){return{users:Ue(e),pageSize:ze(e),totalUsersCount:Me(e),currentPage:De(e),isFetching:Re(e),followingInProgress:Ge(e)}}),{follow:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:F(n,e,l.c.follow.bind(l.c),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=l.c.unfollow.bind(l.c),F(n,e,r,N);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:T,toggleFollowingProgress:A,requestUsers:function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(L(!0)),r(T(e)),n.next=4,l.c.getUsers(e,t);case 4:a=n.sent,r(L(!1)),r((s=a.items,{type:C,users:s})),r((c=a.totalCount,{type:S,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Be),Ve=function(e){return function(t){return Object(ce.jsx)(q.Suspense,{fallback:Object(ce.jsx)(te.a,{}),children:Object(ce.jsx)(e,Object(o.a)({},t))})}},qe=J.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Je=J.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),We=function(e){Object(Z.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(ce.jsxs)("div",{className:"app-wrapper",children:[Object(ce.jsx)(oe,{}),Object(ce.jsx)(me,{}),Object(ce.jsxs)("div",{className:"app-wrapper-content",children:[Object(ce.jsx)(ee.b,{path:"/dialogs",render:Ve(qe)}),Object(ce.jsx)(ee.b,{path:"/profile/:userId?",render:Ve(Je)}),Object(ce.jsx)(ee.b,{path:"/users",render:function(){return Object(ce.jsx)(He,{})}}),Object(ce.jsx)(ee.b,{path:"/login",render:function(){return Object(ce.jsx)(pe,{})}}),Object(ce.jsx)(ee.b,{path:"/news",component:ve}),Object(ce.jsx)(ee.b,{path:"/music",component:he}),Object(ce.jsx)(ee.b,{path:"/settings",component:xe})]})]}):Object(ce.jsx)(te.a,{})}}]),n}(J.a.Component),Ye=Object(a.d)(ee.f,Object($.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(b());Promise.all([t]).then((function(){e({type:D})}))}}}))(We);Y.a.render(Object(ce.jsx)(ne.a,{children:Object(ce.jsx)($.a,{store:V,children:Object(ce.jsx)(Ye,{})})}),document.getElementById("root")),r()},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),a=n(56),c=(n(0),n(88)),s=n(54),i=n.n(s),o=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(o.jsx)("div",{children:a}),c&&Object(o.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,name:t,component:n,validate:a},s))," ",i]})}},42:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.e80fa95c.gif",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3qpg2",error:"FormsControls_error__2dtRp",formSummaryError:"FormsControls_formSummaryError__2P910"}},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symvols")}}},89:function(e,t,n){e.exports={header:"Header_header__27B6T",loginBlock:"Header_loginBlock__3KNKj"}},94:function(e,t,n){e.exports={paginator:"Paginator_paginator__2wRbG",pageNumber:"Paginator_pageNumber__3Vq-Q",selectedPage:"Paginator_selectedPage__AfczF"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return v}));var r=n(10),a=n.n(r),c=n(18),s=n(41),i=n(3),o=n(14),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",j="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"Hi, How are yow?",likesCount:"12"},{id:2,message:"It's my first post",likesCount:"11"},{id:3,message:"Blabla",likesCount:"13"},{id:4,message:"Dada",likesCount:"15"}],profile:null,status:""},p=function(e){return{type:u,newPostText:e}},h=function(e){return{type:d,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case j:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[294,1,2]]]);
//# sourceMappingURL=main.6b39b0a3.chunk.js.map