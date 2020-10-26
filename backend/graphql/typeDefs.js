const gql = require("graphql-tag");

module.exports = gql`
  type Users {
    id: ID!
    username: String!
    email: String!
    lastname: String!
    firstname: String!
  }
  type User {
    id: ID!
    username: String!
    token: String!
    email: String!
    lastname: String!
    firstname: String!
    createdAt: String!
  }
  type NewUser {
    username: String!
    email: String!
    lastname: String!
    firstname: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    firstname: String!
    lastname: String!
  }
  type Query {
    getUsers: [Users]!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
  type Subscription {
    newUser: NewUser!
  }
`;
