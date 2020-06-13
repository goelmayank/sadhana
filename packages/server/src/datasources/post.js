const { RESTDataSource } = require("apollo-datasource-rest");

class postAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/";
  }

  // leaving this inside the class to make the class easier to test
  postReducer(post) {
    return {
      userId: post.userId || 0,
      id: post.id,
      title: post.title,
      body: post.body,
      image: `https://robohash.org/${post.id}`
    };
  }

  async getAllposts() {
    const response = await this.get("posts");

    // transform the raw posts to a more friendly
    return Array.isArray(response)
      ? response.map(post => this.postReducer(post))
      : [];
  }

  async getPostById({ postId }) {
    const res = await this.get("posts", { flight_number: postId });
    return this.postReducer(res[0]);
  }

  async getPostsByIds({ postIds }) {
    return Promise.all(postIds.map(postId => this.getPostById({ postId })));
  }
}

module.exports = postAPI;
