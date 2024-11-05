const User = require('../models/userModel');

module.exports = {
    
    getOneUser: async (_id) => {
        return await User.findById(_id);
    },

    getAllUsers: async () => {
        return await User.find();
    },

    createUser: async ({ fullName, email, password, direction, phoneNumber, paymentMethod }) => {
        const user = new User({ fullName, email, password, direction, phoneNumber, paymentMethod });
        return await user.save();
    },

    updateUser: async (_id, password, direction, phoneNumber, paymentMethod) => {
        return await User.findByIdAndUpdate(_id, { password, direction, phoneNumber, paymentMethod });
    },

    deleteUser: async (_id) => {
        return await User.findByIdAndDelete(_id);
    },
};
