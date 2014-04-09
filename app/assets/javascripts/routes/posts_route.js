Emberapp.PostsRoute = Ember.Route.extend({
  model: function() {
    Emberapp.Post.find();
  }
});