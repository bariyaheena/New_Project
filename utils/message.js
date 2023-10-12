const message = {
    commonMessage: {
        emailIsRequired: 'Email is required!',

        passwordIsRequired: 'Password is required!',
        isPasswordValidate: 'Password should contain 8 character, any special character, number, capital or small letter, Please check your password!',
        isEmailValidate: 'Email is not valid!',
        userNotExists: 'User does not exists!',
        userIdRequired: 'User id is required!'
    },
    signUp: {
        emailIsQnique: 'Email has been used! Please use another email account!',
        registration: 'Registration successfully done!',
        isEmailMatch: 'Please check your email address, email does not exists!',
        passwordNotMatch: 'Please check your password, password does not match!',

    },
    signIn: {
        login: 'you have successfully logged in!',
        wrongPassword: 'Password does not match, Please enter correct password!'
    },
 
    user: {
        unAuthorized: 'Unauthorized user!',
        userData: 'Get user details successfully!'
    },
    
}

const statusCode = {
    success: 200,
    created: 201,
    notFound: 404,
    badRequest: 400,
    unAuthorized: 401
};

module.exports = {
    message,
    statusCode
};
