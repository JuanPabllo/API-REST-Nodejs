const database = require('../infra/database');

exports.getPosts = () => {
  return database.query('select * from blog.post');
};
