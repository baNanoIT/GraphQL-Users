const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: ID!
        fullName: String!
        email: String!
        password: String!
        direction: String!
        phoneNumber: String!  
        registrationDate: String!
        paymentMethod: [String]  
    }

    type Query {
        oneUser(_id: ID!): User
        allUsers: [User!]!
    }

    type Mutation {
        createUser(fullName: String!, email: String!, password: String!, direction: String!, phoneNumber: String!, paymentMethod: [String!]!): User!
        updateUser(_id: ID!, password: String, direction: String, phoneNumber: String, paymentMethod: [String]): User
        deleteUser(_id: ID!): User
    }
`;

module.exports = typeDefs;
