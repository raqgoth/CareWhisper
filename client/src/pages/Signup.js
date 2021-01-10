import React, { useEffect, useState } from 'react'

import TextInput from '../components/TextInput'
import {__createUser} from '../services/UserServices'
import {__createAccount} from '../services/AccountServices'


const SignUp =(props)=>{

    
    const [ email,setEmail]=useState('')
    const [ password,setPassword]=useState('')
    const [username , setUserName]=useState('')
    
    const handleChangeN = ({target}) => {
        setUserName(target.value)
    }

    
    const handleChangeE =({target})=>{
        setEmail(target.value)
    }

    const handleChangeP =({target})=>{
        setPassword(target.value)
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = {
                username,
                email,
                password
            }
          const res = await __createUser(formData)
          setUserName('')
          setPassword('')
          setEmail('')
          props.history.push('/login')
        } catch (error) {
          console.log(error)
        }
      } 


    return (
        <div className='signup'>
            <form className='form flex-col box' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                

                <p>Username:</p>
                <TextInput
                    placeholder="Your username"
                    type='name'
                    name='name'
                    value={username}
                    onChange={handleChangeN}
                />

                <p>Email</p>
                <TextInput
                    placeholder='Your Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChangeE}
                />
                <p></p>
                <p>Password</p>
                <TextInput
                    placeholder='Your Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChangeP}
                    className='last'
                />
               
                <button className='button'>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp