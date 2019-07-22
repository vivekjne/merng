const { ApolloServer } = require("apollo-server");

const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const Post = require("./models/Post");

const { MONGODB } = require("./config");

const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected");
    return server.listen({ port: 5000 });
  })
  .then(res => {
    console.log(`Server running at ${res.url}`);
  });
