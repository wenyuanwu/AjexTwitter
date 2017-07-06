


const APIUtil = {
  followUser: id => $.ajax({
    url: `/users/${id}/follow`,
    type: "POST",
    dataType:"json",
  }),

  unfollowUser: id => $.ajax({
    url: `/users/${id}/follow`,
    type: "DELETE",
    dataType:"json",
  }),

  searchUsers:(queryVal) => $.ajax({
    url: `/users/search`,
    type: "GET",
    data: {query: queryVal},
    dataType:"json"
  })

};






module.exports = APIUtil;
