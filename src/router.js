import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import('./views' + file)
  }
}

export default new Router({
  routes: [
    route("/login",'/Login',"Login"),// /login路径，路由到登录组件
    {
      path:"/", // 根路径，路由到 Layout组件
      component: () => import('./views/Layout'),
      redirect:"/login",
      children:[ // 其它所有组件都是 Layout的子组件
        route("/index/dashboard","/Dashboard","Dashboard"),
        // 定义的是路径hash值与组件位置的映射关系
        // 第一个参数：路径hash值，第二个参数：组件的位置，相对于src/views，第三个参数是组件名称
        route("/item/category",'/item/category/category',"Category"),
        route("/item/brand",'/item/brand/Index',"Brand"),
        route("/item/list",'/item/goods/Index',"Goods"),
        route("/item/specification",'/item/specification/Index',"Specification"),

        route("/user/statistics",'/user/Statistics',"Statistics"),
        route("/user/list",'/user/ListShow',"ListShow"),

        route("/trade/promotion",'/trade/Promotion',"promotion"),
        route("/trade/order",'/trade/Order',"Order"),
        route("/trade/statistics",'/trade/Statistics',"statistics"),
        route("/trade/logistics",'/trade/Logistics',"Logistics"),

        route("/auth/services",'/auth/Services',"Services"),
        route("/auth/list",'/auth/Power',"PowerMange"),
        route("/auth/role",'/auth/Role',"RoleMange"),
        route("/auth/member",'/auth/Member',"Member"),
      ]
    }
  ]
})
