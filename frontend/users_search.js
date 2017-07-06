const ApiUtil = require('./api_util');


class UsersSearch {

  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find("ul");
    this.$input.on("input",this.handleInput.bind(this));

  }

  handleInput(event){
    console.log(ApiUtil.searchUsers(this.$input.val()));
    ApiUtil.searchUsers(this.$input.val()).then(result => this.renderResults(result));
  }

  renderResults(result) {
    this.$ul.empty();
    for (var i = 0; i < result.length; i++) {
      let $li = $("<li>");
      console.log(result[i]);
      $li.html(result[i].username);
      this.$ul.append($li);
    }
  }
}


module.exports = UsersSearch;
