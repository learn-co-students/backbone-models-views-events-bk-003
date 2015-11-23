var app = {};
function bootstrap() {
  // instantiate a new instance of User here
  // make an object where the property name is model and the value is the user instance here
  var user = new User();
  var obj = {model:user};
  // make a new instance of your first view and pass the object as a parameter
  app.formView = new FormView(obj);
  // attach your this view object to app so we have access to it anywhere (call it formView)
  // append the HTML from your newly attached view object to the DOM
  
  // document.body = document.body || document.createElement("body");
  // document.body.appendChild(FormView.el);
  $('body').append(app.formView.el);
  //  make a new instance of your second view and pass the object as a parameter as well
  // attach your this view object to app so we have access to it anywhere (call it userData)
  var secondView = new UserDataView(obj);

  app.userData = secondView;
  // $('body').append(secondView.el);

}