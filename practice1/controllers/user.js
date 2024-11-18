const User = require('./models/User'); // user modal ko import kiya

const createUser = async () => { // create user name ke ek const me sirf call lgai h 
    const user = new User({
        name: 'John Doe',
        email: 'john.doe@example.com', // or values pass ki h
        password: 'securepassword',
    });

    await user.save();
    console.log('User Created:', user);
};

createUser();
