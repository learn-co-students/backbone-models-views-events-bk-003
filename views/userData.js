UserDataView = Backbone.View.extend({
  initialize : function() {
    this.listenTo(this.model, "change", this.handleChange)
  },
  render : function() {
    //the html you'll want to use looks something like this:
    // <h1>User Data Updated!</h1><h2>Users Name is Katie</h2>');
    this.$el.append('<h1>User Data Updated!</h1><h2>Users Name is ' + this.model.get("name") + '</h2>')
    //remember to return the instance of the class here
    return this;
  },
  handleChange : function() {
    // call on the render() function here
    this.render().appendtoDOM();
    // call on the appendtoDOM() function here
  },
  appendtoDOM : function() {
    // append the el from the instance of this class to the body here
    $('body').append(this.el)
  }
})