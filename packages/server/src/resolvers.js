const { paginateResults } = require("./utils");

module.exports = {
  Query: {
    posts: async (_, { pageSize = 20, after }, { dataSources }) => {
      console.log('_', _)
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

      // console.log(result);
      return result;
    }
  }
};
