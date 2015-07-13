MyView = Backbone.View.extend({
  events : {
    // listen to the submission of forms here
    // when a from is sumbitted, call on the the submitHandler function
  },
  initialize: function() {
    // call on the render function here

    // you'll want to call the listenTo function on your instance of the class here
    // listenTo takes three arguments:
    //   1. the property name that points to the model you want to listen to
    //   2. the thing you want to listen for (in this case, you're listening for changes, so "change")
    //   3. the function the view should call when the model changes

  },
  render: function() {
    // the html you'll be working with is 
    // <form><label for="name">
    //  </label><input id="name" type="text" name="name">
    //  <input id= "mySubmit" type="submit" value="submit">
    // </form>

    // remember, it's typical to return the instance of this class here
  },
  submitHandler: function() {
    // this function should accept one parameter, the event

    // prevent the default behavior of the form here (hint: you'll be calling a function on the parameter)

    // save the text value of the input field with an id of name here

    // set the model's name property to be the variable you saved above here
  }
})