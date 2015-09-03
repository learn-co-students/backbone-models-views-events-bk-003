# Intro to Backbone - Views, Events, and Models

## Overview
* Data Binding
* About
* Resources

## Data Binding
You'll often hear data binding talked about as one of the must-have features of any new Javascript MVC framework. So what exactly *is* data binding?

Data binding simply means an automatic syncing between the model and the view. Data binding usually uses the observer pattern (when one object registers interest in updates with another object who broadcasts changes). One way data binding is when the view listens to the model and refreshes itself any time the model's data changes. Two way data binding (seen in Angular and Ember, two other popular front-end frameworks) is when the view listens to the model __and__ the model listens to the view.  Essentially you have the model and the view constantly syncing with each other.

In Backbone, you can set up two way data binding easily, but most commonly you'll wire up one way data binding, where one or more views listen to changes on a model or a collection and refresh themselves when that model changes.

## About

In this lab we're going to wire up two views to communicate with one model. We'll have a form that takes data, updates a model, and have the second view listen for changes on the model and update itself.

Views can listen to models by using Backbone's events module.

```javascript
MyView = Backbone.View.extend({
  initialize : function() {
    this.listenTo(this.model, "change", this.render);
  }
  render : function() {
    this.$el.append('<h1>some html</h1>');
    return this;
  }
})
```

Similar to jQuery handling events, we now have Backbones events which we can manually trigger or which will be triggered automatically when certain things happen. The most common event you'll listen for is a change to a model. You also might listen to the add event in a collection. Everytime a model is changed, Backbone will automatically fire that event (similar to Backbone doing that when an element is clicked on in the browser as we saw in the earlier lab) and anything that's listening to that event will call the function listed as the third argument to the `listenTo` call.

## Resources
* [Wikipedia - Data Binding](https://en.wikipedia.org/wiki/Data_binding)
