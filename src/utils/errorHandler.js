export default (error, values) => {
    let errors = {};

    if (error) {
        if (values.email.trim() === '') {
            errors.email = 'Email must not be empty';
        }
        if (values.password.trim() === '') {
            errors.password = 'Password must not be empty';
        }
        if (values.nickname.trim() === '') {
            errors.nickname = 'Nickname must not be empty';
        }
        if (error.code === 'auth/internal-error') {
            errors.message = 'There was an error';
        }
        if (error.code === 'auth/email-already-in-use') {
            errors.email = 'Email already taken';
        }
        if (error.code === 'auth/invalid-email') {
            errors.email = 'Invalid email';
        }
        if (error.code === 'auth/invalid-password') {
            errors.password = 'Invalid password';
        }
        if (error.code === 'auth/user-not-found') {
            errors.message = 'User not found';
        }
        if (error.code === 'auth/weak-password') {
            errors.password = 'Password should be at least 6 chars';
        }
    }

    return errors;
};