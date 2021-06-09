const { User } = require('../models')

const Register = async (req, res) => {
    const body = req.body
    const user = new User({ 
      username: body.username, 
      email:    body.email,
      password: body.password    
    }) 
    user.save()
    res.send(user)
  }

  const Login = async (req, res) => {
    const user = await User.findOne({
      where: { email: req.body.email },
    
    }) // Find a user by email
    if (user) {
      let payload = {
        id: user.id,
        username: user.username
      }
      return res.send(payload)
    }
      res.send({ messsage:"unauthorized" })
    }
  

const SessionStatus = async (req, res) => {
  try {
    const { token } = res.locals
    const user = await User.findByPk(token.id, {
      attributes: ['id', 'username', 'email'] // Find a user by the id encoded in the json web token, only include the id, name and email fields
    })
    res.send({ user, status: 'OK' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  Register,
  Login,
  SessionStatus
}
