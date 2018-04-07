const db = require('./db').db

module.exports.handleSignup = (email, password) => {
    db.saveUser({
        email,
        password
    })
}