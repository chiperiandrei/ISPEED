const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
  Subscription: {
    ...usersResolvers.Subscription,
  },
};
