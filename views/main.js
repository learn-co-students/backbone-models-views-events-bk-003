FormView = Backbone.View.extend({
  events : {
    // listen to the submission of forms here
    // when a from is sumbitted, call on the the submitHandler function
    "submit form" : "submitHandler"
  },
  initialize: function() {
    // call on the render function here
    this.render();
  },
  render: function() {

// <form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>
    this.$el.append('<form><label for="name"></label><input id="name" type="text" name="name"><input id= "mySubmit" type="submit" value="submit"></form>')
    // remember, it's typical to return the instance of this class here
    return this;
  },
  submitHandler: function(e) {
    // this function should accept one parameter, the event
    e.preventDefault()
    // prevent the default behavior of the form here (hint: you'll be calling a function on the parameter)
    // save the text value of the input field with an id of name here
    var name = $('#name').val()
    // set the model's name property to be the variable you saved above here
    this.model.set("name", name)
  }
})