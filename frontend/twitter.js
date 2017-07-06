const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(document).ready(function() {
  $("button.follow-toggle").each(function(index, el) {
    new FollowToggle(el);
  });
  $("nav.users-search").each(function(index, el) {
    new UsersSearch(el);
  });
});

//
// $(document).ready(function() {
//
//
// });
