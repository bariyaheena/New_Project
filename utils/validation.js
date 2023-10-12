const userModal = require('../modals/userModel');

const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.match(pattern)) { return true; }
    
    return false
}

const isValidPassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(password.match(pattern)) { return true; }

    return false;
}

// const checkPhoneNumber = (phone) => {
//     const checkNumber = /^[0-9]*$/.test(phone);

//     if(checkNumber) {
//         const checkLength = String(phone).length;
//         return checkLength === 10 ? true : false;
//     } else {
//         return false
//     }
// }

module.exports = {
    isValidEmail,
    isValidPassword,
    // checkPhoneNumber
};
