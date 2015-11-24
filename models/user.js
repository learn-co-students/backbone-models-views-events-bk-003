// create your user model here
// it should extend (inherit) from the main Backbone model object
User = Backbone.Model.extend({
	defaults: function() {
		return {
			"name" : "name me!",
		};
	},
	giveUserName: function(name) {
		this.set("name", name)
	}
});
