const studentModal = require('../modals/studentModel');


const createstudent = async(data) => {
    
    const saveData = await studentModal.create(data);
    return saveData;
}

const findstudent = async(query) => {
    
    const existsData = await studentModal.findOne(query);


    return existsData;
}




module.exports = {
    createstudent,
    findstudent
}
