FormView = Backbone.View.extend({
  events : {
    "submit" : "submitHandler"
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    var myForm = '<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>'
    this.$el.html(myForm);
    return this;
  },
  submitHandler: function(event) {
    event.preventDefault();
    var name = $("form").serialize().match(/=(.+)/)[1]
    this.model.set('name', name);
  }
})