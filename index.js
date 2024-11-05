const { ApolloServer }  = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./src/schemas/userSchema');
const resolvers = require('./src/resolvers/userResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://jealsanchezto:ILNz9Z487QNt0fQH@innedutec.od3fq.mongodb.net/');
    const server = new ApolloServer({ typeDefs, resolvers});

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startServer();
