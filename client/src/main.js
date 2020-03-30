import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueRouter from "vue-router";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import User from "./components/User";
import ForgotPass from "./components/ForgotPass";
import ChangePass from "./components/ChangePass";
import Vuetify from "vuetify";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register }, //sajt.com/register
  { path: "/login", component: Login },
  { path: "/user", component: User },
  { path: "/forgotPass", component: ForgotPass },
  { path: "/changePass/:token", component: ChangePass },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
