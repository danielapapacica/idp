const {
    Ads,
} = require('../data');

const add = async (title, user_id, description, category) => {
    const ad = new Ads({
        title,
        user_id,
        description,
        category
    });
    await ad.save();
};

const getAll = async () => {
    return await Ads.find();
};

const getById = async (id) => {
    return await Ads.findById(id);
};

const updateById = async (id, title, user_id, description, category) => {
    await Ads.findByIdAndUpdate(id, { title, user_id, description, category });
};

const deleteById = async (id) => {
    await Ads.findByIdAndDelete(id);
};

module.exports = {
    add,
    getAll,
    getById,
    updateById,
    deleteById
}