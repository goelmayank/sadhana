require("dotenv").config();
console.log(process.env.MONGODB_URL);

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { createStore } = require("./utils");

const PostAPI = require("./datasources/post");
const UserAPI = require("./datasources/user.js");

const internalEngineDemo = require("./engine-demo");

// creates a sequelize connection once. NOT for every request
const store = createStore();

// set up any dataSources our resolvers need
const dataSources = () => ({
  postAPI: new PostAPI(),
  UserAPI: new UserAPI({ store })
});

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: true,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    ...internalEngineDemo
  }
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== "test") {
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 app running at ${url}`);
  });
}

// export all the important pieces for integration/e2e tests to use
module.exports = {
  dataSources,
  typeDefs,
  resolvers,
  ApolloServer,
  PostAPI,
  server
};
