import * as controller from './controller.js'

window.addEventListener("load", function() {
	window.$.sammy("#app", function(s) {
		this.use("Handlebars", "hbs")

		this.get('#/({:err})?', controller.GetIndex)
		this.get('/', function(c) {c.redirect("#/")})
		this.post("#/connect", controller.PostConnect)
		this.get("#/home", controller.GetHome)
	}).run()
})
