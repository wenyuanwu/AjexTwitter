const ApiUtil = require ('./api_util');

class FollowToggle{
  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
    console.log(this.followState);
    console.log(typeof this.followState);
  }

  render(){
    if (this.followState === "following" || this.followState === "unfollowing" ) {
      this.$el.prop("disabled", true);
    } else if(this.followState){
      this.$el.html("Unfollow!");
      this.$el.prop("disabled", false);
    } else {
      this.$el.html("Follow!");
      this.$el.prop("disabled", false);

    }
  }

  handleClick(){

    $(".follow-toggle").on("click", event => {
		// Lookup `preventDefault`; it stops the browser's default action,
		// which is to make a synchronous submission of the form.
		// http://api.jquery.com/category/events/event-object
		event.preventDefault();

		// As a shortcut, when jQuery calls your event handler, it sets
		// `this == event.currentTarget`.

		var formData = $(event.currentTarget).serialize();

		// If you filled out name "Gizmo" and color "Black", then
		// formData == "cat%5Bname%5D=Gizmo&cat%5Bcolor%5D=Black"
    if (this.followState) {
      this.followState = "unfollowing";
      this.render();
      ApiUtil.unfollowUser(this.userId)
        .then(() => {
          this.followState = false;
          this.render();
        });
    } else {
      this.followState = "following";
      this.render();
      ApiUtil.followUser(this.userId)
        .then(() => {
          this.followState = true;
          this.render();
        });
    }

  });

  }
}


module.exports = FollowToggle;
