const { paginateResults } = require("./utils");

module.exports = {
  Query: {
    posts: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allposts = await dataSources.postAPI.getAllposts();

      const posts = paginateResults({
        after,
        pageSize,
        results: allposts
      });
      
      const result = {
        posts,
        cursor: posts.length ? posts[posts.length - 1].id : null,
        // if the cursor of the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: posts.length
          ? posts[posts.length - 1].id !==
            allposts[allposts.length - 1].id
          : false
      };

      return result;
    },
    me: async (_, __, { dataSources }) =>
      dataSources.userAPI.findOrCreateUser(),
  },
  Mutation: {
    login: async (_, { email }, { dataSources }) => {
      const user = await dataSources.userAPI.findOrCreateUser({ email });
      console.log(user);
      if (user) return new Buffer(email).toString('base64');
    }
  }
};
