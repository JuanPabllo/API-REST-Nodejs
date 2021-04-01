const postdata = require('../data/postsData');

exports.getPosts = () => {
  return postdata.getPosts();
};
