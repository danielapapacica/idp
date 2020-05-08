const {
    Users
} = require('../data');

const add = async (name, username, password, email, phone, location) => {

    const role = 'user';
    const user = new Users({
        name: name,
        username: username,
        password: password,
        email: email,
        phone: phone,
        location: location,
        role: role
    });
    await user.save();
};

const getUsers = async () => {
    return await Users.find();
};



module.exports = {
    add, getUsers
}