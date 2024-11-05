const userService = require('../services/userService');

const resolvers = {

    Query: {
        
        oneUser: async (_, { _id }) => {  
            return await userService.getOneUser(_id); 
        },
                
        allUsers: () => {
            return userService.getAllUsers();
        }
    },// Querys

    Mutation: {
        createUser: (_, {fullName, email, password, direction, phoneNumber, paymentMethod}) => {
            return userService.createUser({fullName, email, password, direction, phoneNumber, paymentMethod});
        },//Create

        updateUser: (_,{_id,password, direction, phoneNumber, paymentMethod}) => {
            return userService.updateUser(_id, password, direction, phoneNumber, paymentMethod);
        },//Update

        deleteUser: (_, {_id}) => {
            return userService.deleteUser(_id);
        },//Delete
    }// Mutation
};//Resolvers

module.exports = resolvers;