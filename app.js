var app = {};

function bootstrap() {
  // instantiate a new instance of User here
    user = new User();
  // make an object where the property name is model and the value is the user instance here
  	userobj = {"model": user};
  // make a new instance of your first view and pass the object as a parameter
  	formView = new FormView(userobj);
  // attach your this view object to app so we have access to it anywhere (call it formView)
  	app.formView = formView;
  // append the HTML from your newly attached view object to the DOM
  	$('body').append(formView.el);

  //  make a new instance of your second view and pass the object as a parameter as well
  	udv = new UserDataView(userobj);
  // attach your this view object to app so we have access to it anywhere (call it userData)
  	app.userData = udv;
}