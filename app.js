var app = {};
function bootstrap() {
  var user = new User();
  var formView = new FormView({model : user});
  app.formView = formView;
  var userDataView = new UserDataView({model : user});
  app.userData = userDataView;
  $("body").append(formView.el);
}