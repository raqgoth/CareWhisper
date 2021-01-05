import {ADD_USER, NEW_USER, REMOVE_USER } from '../types'

export const AddUser = (user) => ({
    type: ADD_USER,
    payload: {name: user, email: email, password: password}
        //implicit return od an object
})

export const NewUser = (formValue) => ({
    type: NEW_USER,
    payload: formValue
})

export const RemoveUser = (index) => ({
    type: REMOVE_USER,
    payload: index
})

