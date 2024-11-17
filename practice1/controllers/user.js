const User = require('./models/User');

const createUser = async () => {
    const user = new User({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'securepassword',
    });

    await user.save();
    console.log('User Created:', user);
};

createUser();
