UserDataView = Backbone.View.extend({
  initialize : function() {
    this.listenTo(this.model, "change", this.handleChange);
  },
  render : function() {
    debugger
    var updateHtml = '<h1>User Data Updated!</h1><h2>Users Name is ' + this.model.get('name') + '</h2>'
    this.$el.append(updateHtml);
    return this;
  },
  handleChange : function() {
    this.render();
    this.appendtoDOM();
  },
  appendtoDOM : function() {
    
    $('body').append(this.el);
  }
})