import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import findUs from "../views/findUs/findUs.vue";
import Products from "../views/Products/Products.vue";
import Sell from "../views/Sell/Sell.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/findUs",
		name: "findUs",
		component: findUs,
	},
	{
		path: "/products",
		name: "Products",
		component: Products,
	},
	{
		path: "/sell",
		name: "Sell",
		component: Sell,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
