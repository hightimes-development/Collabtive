var loaderComponent = Vue.extend({
	props: ["block", "loader"],
	template: "<div class=\"progress float-left display-none\" id=\"progress{{block}}\"><img src=\"templates\/standard\/theme\/standard\/images\/symbols\/{{loader}}\" \/><\/div>"
});
Vue.component("loader", loaderComponent);