const db = require('./db')

module.exports.handleSignUp = (user, password) => {
  /* check if email is Exists */
  /* save to database */
  db.saveUser({email, password})
  /* send welcome email */
  
}