(function(e){function t(t){for(var o,c,s=t[0],l=t[1],i=t[2],d=0,v=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},r=[];function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"05f5":function(e,t,a){e.exports=a.p+"img/404.6695af99.svg"},"0809":function(e,t,a){"use strict";var o=a("9bcd"),n=a.n(o);n.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"325b":function(e,t,a){"use strict";var o=a("53f7"),n=a.n(o);n.a},3607:function(e,t,a){"use strict";var o=a("b3f4"),n=a.n(o);n.a},4:function(e,t){},"53f7":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("router-view")],1)],1)},r=[],c=a("ecee"),s=a("c074"),l=a("ad3d");c["c"].add(s["a"]),o["default"].component("font-awesome-icon",l["a"]);var i={name:"App",components:{},data:function(){return{}},methods:{loggedIn:function(){return!!localStorage.getItem("token")},logOut:function(){localStorage.removeItem("token")}}},u=i,d=(a("82a6"),a("2877")),v=a("6544"),m=a.n(v),p=a("7496"),f=a("a75b"),g=Object(d["a"])(u,n,r,!1,null,"1d02b810",null),h=g.exports;m()(g,{VApp:p["a"],VContent:f["a"]});var _=a("f309");o["default"].use(_["a"]);var b,w=new _["a"]({icons:{iconfont:"mdi"}}),E=(a("d1e78"),a("8c4f")),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"overlay-opacity":"0.75",width:"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[a("v-btn",e._g({staticClass:"ma-4",attrs:{color:"blue accent-3",dark:""}},o),[e._v("Register")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("v-row",[a("v-col",{attrs:{cols:"10"}},[a("span",{staticClass:"headline"},[e._v("Make user profile")])]),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:"",color:"blue darken-1"},on:{click:e.close}},[a("v-icon",{attrs:{medium:""}},[e._v("mdi-close")])],1)],1)],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",rules:e.emailRules,filled:"",rounded:"",dense:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Username*",filled:"",rounded:"",dense:"",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",required:"",filled:"",rounded:"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",hint:"At least 5 characters",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),a("small",[e._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.registerUser}},[e._v("Register")])],1)],1)],1)],1)},x=[],R=a("bc3a"),C=a.n(R),O=a("b05c");b="https://daljinac-api.herokuapp.com",console.log(b);var k={name:"Register",data:function(){return{username:"",password:"",dialog:!1,valid:!0,show1:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=5||"Min 5 characters"}},email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],lazy:!1}},methods:{registerUser:function(){console.log(b),console.log(O),C.a.post("".concat(b,"/users"),{username:this.username,password:this.password,email:this.email})},close:function(){this.$refs.form.reset(),this.dialog=!1}}},P=k,S=(a("fee9"),a("8336")),y=a("b0af"),j=a("99d9"),T=a("62ad"),N=a("a523"),A=a("169a"),D=a("4bd4"),I=a("132d"),U=a("0fd9"),B=a("2fa4"),L=a("8654"),$=Object(d["a"])(P,V,x,!1,null,"716c892a",null),F=$.exports;m()($,{VBtn:S["a"],VCard:y["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:T["a"],VContainer:N["a"],VDialog:A["a"],VForm:D["a"],VIcon:I["a"],VRow:U["a"],VSpacer:B["a"],VTextField:L["a"]});var K,M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{staticStyle:{background:"rgba(0,0,0,0)"}},[o("div",{attrs:{id:"bod"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"8"}},[o("router-link",{attrs:{to:"/Homepage"}},[o("v-img",{attrs:{src:a("9b47"),"max-width":"240px","max-height":"70px"}})],1)],1),o("v-col",{attrs:{cols:"4","padding-top":"20px",align:"right"}},[o("Register"),o("Login")],1)],1)],1),o("v-spacer"),o("v-card-text"),o("v-content",[o("router-view")],1)],1)])},Y=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"overlay-opacity":"0.75",width:"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[a("v-btn",e._g({staticClass:"ma-4",attrs:{color:"blue accent-3",dark:""}},o),[e._v("Log in")])]}}]),model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("v-row",[a("v-col",{attrs:{cols:"10"}},[a("span",{staticClass:"headline"},[e._v("Log in")])]),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:"",color:"blue darken-1"},on:{click:e.close}},[a("v-icon",{attrs:{medium:""}},[e._v("mdi-close")])],1)],1)],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Username*",filled:"",rounded:"",dense:"",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",filled:"",rounded:"",dense:"",required:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-row",[a("v-col",{staticClass:"text-center"},[a("router-link",{attrs:{to:"/forgotPass"}},[e._v("Forgot your password?")])],1)],1)],1)],1),a("small",[e._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.loginUser}},[e._v("Log in")])],1)],1)],1)],1)},H=[],z=(a("99af"),a("96cf"),a("1da1")),G={};G.PORT=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).VUE_APP_PORT||3e3,G.SECRET_KEY="tajnica",G.EMAIL_SECRET=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).VUE_APP_EMAIL_SECRET||"secret_email",G.DB_HOST=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).VUE_APP_DB_HOST||"http://localhost",G.FRONT_HOST=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).VUE_APP_FRONT_HOST||"http://localhost",G.MONGODB_URI=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).MONGODB_URI,K="https://daljinac-api.herokuapp.com/users/login";var J={name:"Login",data:function(){return{username:"",password:"",dialog2:!1,show1:!1,valid:!0}},methods:{loginUser:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(K),t.next=4,C.a.post(K,{username:e.username,password:e.password});case 4:a=t.sent,o=a.data,localStorage.setItem("token",o),e.$router.push("/user"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},reset:function(){this.$refs.form.reset()},close:function(){this.$refs.form.reset(),this.dialog2=!1}}},W=J,Q=Object(d["a"])(W,q,H,!1,null,"3670330f",null),X=Q.exports;m()(Q,{VBtn:S["a"],VCard:y["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:T["a"],VContainer:N["a"],VDialog:A["a"],VForm:D["a"],VIcon:I["a"],VRow:U["a"],VSpacer:B["a"],VTextField:L["a"]}),c["c"].add(s["a"]),o["default"].component("font-awesome-icon",l["a"]);var Z={name:"Homepage",components:{Login:X,Register:F},data:function(){return{dialog:!1}}},ee=Z,te=(a("0809"),a("adda")),ae=Object(d["a"])(ee,M,Y,!1,null,"5a072144",null),oe=ae.exports;m()(ae,{VApp:p["a"],VCardText:j["b"],VCol:T["a"],VContainer:N["a"],VContent:f["a"],VImg:te["a"],VRow:U["a"],VSpacer:B["a"]});var ne=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("NavigationBar"),o("h1",[e._v("Oops... that doesn't seem to exist")]),o("img",{attrs:{src:a("05f5"),alt:""}})],1)},re=[],ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",[o("v-toolbar",{staticClass:"header",attrs:{color:"#546E7A",dark:"",flat:""}},[o("v-container",[o("router-link",{attrs:{to:"/Homepage"}},[o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("v-img",{attrs:{src:a("9b47"),"max-width":"240px","max-height":"70px"}})],1)],1)],1)],1),o("v-spacer"),o("v-card-text",[o("div",{attrs:{align:"right"}},[o("v-btn",{staticClass:"ma-4",attrs:{icon:""}},[o("v-icon",{attrs:{large:""}},[e._v("mdi-magnify")])],1),e.loggedIn()?o("v-btn",{staticClass:"ma-4",attrs:{color:"blue accent-3"},on:{click:e.logOut}},[e._v("Log out")]):o("v-btn",{staticClass:"ma-4",attrs:{color:"blue accent-3"}},[e._v("Login")]),o("v-btn",{staticClass:"ma-4",attrs:{color:"blue accent-3"}},[e._v("Contact us ")])],1)])],1),o("v-content",[o("router-view")],1)],1)},se=[];c["c"].add(s["a"]),o["default"].component("font-awesome-icon",l["a"]);var le={name:"NavigationBar",components:{},data:function(){return{}},methods:{loggedIn:function(){return!!localStorage.getItem("token")},logOut:function(){localStorage.removeItem("token")}}},ie=le,ue=(a("325b"),a("71d9")),de=Object(d["a"])(ie,ce,se,!1,null,null,null),ve=de.exports;m()(de,{VBtn:S["a"],VCard:y["a"],VCardText:j["b"],VCol:T["a"],VContainer:N["a"],VContent:f["a"],VIcon:I["a"],VImg:te["a"],VRow:U["a"],VSpacer:B["a"],VToolbar:ue["a"]});var me,pe={name:"NotFound",components:{NavigationBar:ve}},fe=pe,ge=Object(d["a"])(fe,ne,re,!1,null,null,null),he=ge.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("NavigationBar"),a("v-container",[a("br"),a("br"),a("v-row",[a("v-col",{attrs:{cols:"4",align:"center"}},[a("h1",[e._v(e._s(e.username)+" 's home")])])],1),a("v-row",[a("v-col",{attrs:{cols:"4",align:"center"}},[a("v-btn",{on:{click:function(t){e.dialog=!e.dialog}}},[e._v("New room")])],1)],1),a("v-row",e._l(e.user.rooms,(function(e){return a("Card",{key:e._id,attrs:{hover:"","max-width":"100px",title:e.name,deviceID:e.deviceID}})})),1),a("v-row"),a("v-row",[a("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[e._v("New Room")]),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"1"}}),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Room name"},model:{value:e.newRoomName,callback:function(t){e.newRoomName=t},expression:"newRoomName"}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Device ID"},model:{value:e.newDeviceID,callback:function(t){e.newDeviceID=t},expression:"newDeviceID"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}}),a("v-col",[a("v-radio-group",{attrs:{column:"",label:"Room type"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}},[a("v-radio",{attrs:{label:"Living room",value:"l"}}),a("v-radio",{attrs:{label:"Bedrooom",value:"b"}}),a("v-radio",{attrs:{label:"Kitchen",value:"k"}}),a("v-radio",{attrs:{label:"Kids room",value:"r"}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}}),a("v-col",[a("v-btn",{on:{click:e.newRoom}},[e._v("Add Room")])],1)],1)],1)],1)],1)],1)],1)],1)},be=[],we=a("9ed4"),Ee=a.n(we),Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[a("v-card",{staticClass:"mx-auto my-12",attrs:{elevation:o?24:6,loading:e.loading,"max-width":"300"}},[a("v-img",{attrs:{height:"150",src:"https://www.thespruce.com/thmb/_iITA9xgfLDWyLjzF5xwBDTzdgI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-842254818-5bfc267446e0fb00260a3348.jpg"}}),a("v-card-title",[e._v(e._s(e.$props.title))]),a("v-card-text",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"display-2",attrs:{cols:"6"}},[e._v("23°C")])],1)],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[a("div",{attrs:{align:"center"}},[a("v-btn",{staticClass:"ma-4",attrs:{icon:"",color:"green"}},[a("v-icon",{attrs:{large:""}},[e._v("mdi-power-standby")])],1),a("v-btn",{staticClass:"ma-4",attrs:{icon:"",color:"blue"}},[a("v-icon",{attrs:{large:""}},[e._v("mdi-chevron-up-circle-outline")])],1),a("v-btn",{staticClass:"ma-4",attrs:{icon:"",color:"blue"}},[a("v-icon",{attrs:{large:""}},[e._v("mdi-chevron-down-circle-outline")])],1)],1)])],1)]}}])})},xe=[],Re=(a("a9e3"),{name:"Card",data:function(){return{}},props:{title:String,deviceID:Number}}),Ce=Re,Oe=a("ce7e"),ke=a("ce87"),Pe=Object(d["a"])(Ce,Ve,xe,!1,null,"1389e2d6",null),Se=Pe.exports;m()(Pe,{VBtn:S["a"],VCard:y["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:T["a"],VDivider:Oe["a"],VHover:ke["a"],VIcon:I["a"],VImg:te["a"],VRow:U["a"]}),me="https://daljinac-api.herokuapp.com/users/";var ye="".concat(me,"/room/"),je={name:"User",data:function(){return{user:null,username:"",rooms:[],dataReady:!1,dialog:!1,newRoomName:"",newDeviceID:""}},components:{Card:Se,NavigationBar:ve},methods:{newRoom:function(){var e=this,t=localStorage.getItem("token");C.a.put(ye+this.username,{name:this.newRoomName,deviceID:this.newDeviceID},{headers:{authorization:"Bearer ".concat(t)}}).then((function(a){console.log(a),C.a.get(me+e.username,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){e.user=t.data,e.dataReady=!0,console.log(t.data.rooms)}))}))},loggedIn:function(){return!!localStorage.getItem("token")},logOut:function(){localStorage.removeItem("token")}},mounted:function(){var e=this,t="tajnica",a=localStorage.getItem("token");Ee.a.verify(a,t,(function(t,a){e.username=a.username,t&&console.log(t)})),C.a.get(me+this.username).then((function(t){e.user=t.data,e.dataReady=!0}))}},Te=je,Ne=(a("3607"),a("67b6")),Ae=a("43a6"),De=Object(d["a"])(Te,_e,be,!1,null,null,null),Ie=De.exports;m()(De,{VBtn:S["a"],VCard:y["a"],VCardTitle:j["c"],VCol:T["a"],VContainer:N["a"],VDialog:A["a"],VRadio:Ne["a"],VRadioGroup:Ae["a"],VRow:U["a"],VTextField:L["a"]});var Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("NavigationBar"),a("v-container",[a("br"),a("br"),a("br"),a("v-form",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{label:"Enter your e-mail address",filled:"",rounded:"",dense:"",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),a("div",[a("v-row",[a("v-col",{attrs:{cols:"4",align:"center"}},[a("v-btn",{attrs:{color:"blue accent-3",dark:""},on:{click:e.sendEmail}},[e._v("Send E-mail")])],1)],1)],1)],1)],1)],1)},Be=[],Le={name:"ForgotPass",data:function(){return{username:""}},components:{NavigationBar:ve},methods:{sendEmail:function(){var e=Object(z["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://localhost:3000/users/forgotPass/",e.prev=1,e.next=4,C.a.get(t+this.username);case 4:a=e.sent,console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}()}},$e=Le,Fe=Object(d["a"])($e,Ue,Be,!1,null,null,null),Ke=Fe.exports;m()(Fe,{VBtn:S["a"],VCol:T["a"],VContainer:N["a"],VForm:D["a"],VRow:U["a"],VTextField:L["a"]});var Me,Ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",[a("v-row",[a("h1",[e._v("Change Pass")])]),a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{outlined:"",label:"New Password"},model:{value:e.newPass,callback:function(t){e.newPass=t},expression:"newPass"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"1"}}),a("v-col",[a("v-btn",{on:{click:e.changePass}},[e._v("Change password")])],1)],1)],1)],1)},qe=[];Me="https://daljinac-api.herokuapp.com/users/changePass";var He={name:"ChangePass",data:function(){return{newPass:""}},methods:{changePass:function(){var e=Object(z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.$route.params.token),e.prev=1,e.next=4,C.a.put(Me,{token:this.$route.params.token,newPass:this.newPass});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}()}},ze=He,Ge=Object(d["a"])(ze,Ye,qe,!1,null,null,null),Je=Ge.exports;m()(Ge,{VBtn:S["a"],VCol:T["a"],VContainer:N["a"],VRow:U["a"],VTextField:L["a"]});var We=a("ce5b"),Qe=a.n(We);o["default"].config.productionTip=!1,o["default"].use(Qe.a),o["default"].use(E["a"]);var Xe=[{path:"/",component:oe},{path:"/homepage",component:oe},{path:"/register",component:F},{path:"/login",component:X},{path:"/user",component:Ie},{path:"/forgotPass",component:Ke},{path:"/changePass/:token",component:Je},{path:"*",component:he}],Ze=new E["a"]({routes:Xe,mode:"history"});new o["default"]({vuetify:w,router:Ze,render:function(e){return e(h)}}).$mount("#app")},"82a6":function(e,t,a){"use strict";var o=a("fe33"),n=a.n(o);n.a},"9b47":function(e,t,a){e.exports=a.p+"img/e.70d52fd3.svg"},"9bcd":function(e,t,a){},afed:function(e,t,a){},b05c:function(e,t,a){a("ed17").config();var o={};o.PORT=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).PORT||3e3,o.SECRET_KEY=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).SECRET_KEY||"secret_key",o.EMAIL_SECRET=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).EMAIL_SECRET||"secret_email",o.DB_HOST=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).VUE_APP_DB_HOST||"http://localhost:3000",o.FRONT_HOST=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).FRONT_HOST||"http://localhost:8080",o.MONGODB_URI=Object({NODE_ENV:"production",VUE_APP_SECRET_KEY:"tajnica",BASE_URL:"/"}).MONGODB_URI,e.exports=o},b3f4:function(e,t,a){},fe33:function(e,t,a){},fee9:function(e,t,a){"use strict";var o=a("afed"),n=a.n(o);n.a}});
//# sourceMappingURL=app.1ad1308e.js.map