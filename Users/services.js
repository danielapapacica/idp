const {
    Users
} = require('../data');

const {
    ServerError
} = require('../errors');



const add = async (name, surname, password, email, phone) => {
    const role = 'user';
    const user = new Users({
        name,
        surname,
        password,
        email,
        phone
    });
    await user.save();
};

const getUsers = async () => {
    return await Users.find();
};


module.exports = {
    add, getUsers
}