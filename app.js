var app = {};
function bootstrap() {
  // instantiate a new instance of User here
  // make an object where the property name is model and the value is the user instance here

  // make a new instance of your first view and pass the object as a parameter
  // attach your this view object to app so we have access to it anywhere (call it formView)
  // append the HTML from your newly attached view object to the DOM

  //  make a new instance of your second view and pass the object as a parameter as well
  // attach your this view object to app so we have access to it anywhere (call it userData)
  var user = new User();

  app.formView = new FormView({model : user})

  app.userData = new UserDataView({model : user})

  $('body').append(app.formView.el)
}