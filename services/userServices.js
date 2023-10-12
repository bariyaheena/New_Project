const userModal = require('../modals/userModel');


const createUser = async(data) => {
    
    const saveData = await userModal.create(data);
    return saveData;
}

const findUser = async(query) => {
    
    const existsData = await userModal.findOne(query);


    return existsData;
}


module.exports = {
    createUser,
    findUser
}
