const { GET_USER, ADD_USER, NEW_USER} = require('../types')

export const initialState = {
    users: [],
    newUser: {name: '', email: '', password: ''}, 
     
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER:
        return { ...state, user: action.payload }
        case ADD_USER:
          console.log(action.payload)
          return { ...state, users: [...state.users, action.payload], newUser: '' }
        case NEW_USER:
            return { ...state, newUser: action.payload }
                default:
        return { ...state }
    }
}

export default UserReducer
  