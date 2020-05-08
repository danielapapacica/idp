const {
    Ads,
} = require('../data');
const {
    Users
} = require('../data');


const add = async (photo, title, price, location, description, category, user_id) => {
    const ad = new Ads({
        photo: photo,
        title: title,
        price: price,
        location: location,
        description: description,
        category: category,
        user: user_id,
    });
    await ad.save();
    return ad._id;
};

const getAll = async () => {
    return await Ads.find().populate({path:'user'});
};



module.exports = {
    add,
    getAll
}