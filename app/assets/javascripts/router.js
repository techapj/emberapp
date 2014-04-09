// For more information see: http://emberjs.com/guides/routing/

Emberapp.Router.map(function() {
  this.resource("posts", function() {
    this.resource("post", { path: ":post_id" });
  });
});
