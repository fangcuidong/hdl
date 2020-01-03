import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/login.vue'
import index from "../views/index.vue";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err);
};

const routes = [
	{
		path: "/",
		name: "home",
		component: index,
		children: [
			{
				path: "/",
				name: "home",
				component: () =>
					import(/* webpackChunkName: "home" */ "../views/home.vue")
			},
			{
				path: "/Community",
				name: "community",
				component: () =>
					import(/* webpackChunkName: "Community" */ "../views/Community.vue")
			},
			{
				path: "member",
				name: "member",
				component: () =>
					import(/* webpackChunkName: "member" */ "../views/member/Member.vue")
			},
			{
				path: "me",
				name: "me",
				component: () =>
					import(/* webpackChunkName: "me" */ "../views/Me/Me.vue")
			}
		]
	},
	{
		path: "/login",
		name: "login",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/login.vue")
	},
	{
		path: "/forget",
		name: "forget",
		component: () =>
			import(/* webpackChunkName: "forget" */ "../views/forget.vue")
	},
	{
		path: "/amend",
		name: "amend",
		component: () =>
			import(/* webpackChunkName: "amend" */ "../views/Amend.vue")
	},
	// {
	// 	path: "/me",
	// 	name: "me",
	// 	component: () => import(/* webpackChunkName: "me" */ "../views/Me/Me.vue")
	// },
	{
		path: "/edit",
		name: "edit",
		component: () =>
			import(/* webpackChunkName: "edit" */ "../views/Me/Edit.vue")
	},
	{
		path: "/setting",
		name: "setting",
		component: () =>
			import(/* webpackChunkName: "setting" */ "../views/Me/Setting.vue")
	},

	// {
	// 	path: "/member",
	// 	name: "Member",
	// 	component: () =>
	// 		import(/* webpackChunkName: "member" */ "../views/member/Member.vue")
	// },
	{
		path: "/cradSwipe",
		name: "CradSwipe",
		component: () =>
			import(
				/* webpackChunkName: "cradSwipe" */ "../views/member/CradSwipe.vue"
			)
	},
	{
		path: "/order",
		name: "order",
		component: () =>
			import(/* webpackChunkName: "order" */ "../views/Order/Order.vue")
	},
	/**我的 */
	{
		path: "/edit",
		name: "edit",
		component: () =>
			import(/* webpackChunkName: "edit" */ "../views/Me/Edit.vue")
	},
	{
		path: "/userName",
		name: "userName",
		component: () =>
			import(/* webpackChunkName: "userName" */ "../views/Me/UserName.vue")
	},
	{
		path: "/name",
		name: "name",
		component: function() {
			return import(/* webpackChunkName: "name" */ "../views/Me/Name.vue");
		}
	},
	{
		path: "/sign",
		name: "sign",
		component: () =>
			import(/* webpackChunkName: "sign" */ "../views/Me/Sign.vue")
	},
	{
		path: "/email",
		name: "email",
		component: () =>
			import(/* webpackChunkName: "email" */ "../views/Me/Email.vue")
	},
	{
		path: "/search",
		name: "search",
		component: () =>
			import(/* webpackChunkName: "search" */ "../views/search.vue")
	},
	{
		path: "/shop",
		name: "shop",
		component: () => import(/* webpackChunkName: "shop" */ "../views/shop.vue")
	},
	{
		path: "/takeout",
		name: "takeout",
		component: () =>
			import(/* webpackChunkName: "takeout" */ "../views/Takeout.vue")
	},
	{
		path: "/delivery",
		name: "delivery",
		component: () =>
			import(
				/* webpackChunkName: "delivery" */ "../components/older/delivery.vue"
			)
	},
	{
		path: "/newly",
		name: "newly",
		component: () =>
			import(/* webpackChunkName: "newly" */ "../components/older/newly.vue")
	},
	{
		path: "/payment",
		name: "payment",
		component: () =>
			import(/* webpackChunkName: "payment" */ "../views/Payment.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
