const axios = require('axios');

test('Should get posts', async () => {
  const response = await axios({
    url: 'http://localhost:3000/posts',
    method: 'get',
  });
  const posts = response.data;
  expect(posts).toHaveLength(4);
  const [firstPost] = posts;
  expect(firstPost.id).toBe(1);
  expect(firstPost.title).toBe('Api: métodos');
});
