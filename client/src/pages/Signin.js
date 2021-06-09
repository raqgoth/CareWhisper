import React, { useState } from 'react'
import {__LoginUser} from '../services/UserServices'
import TextInput from '../components/TextInput'
import Nav from '../components/Nav'
import '../styles/SignIn.css'


const LogIn = (props)=>{
    
    const [ email,setEmail]=useState('')
    const [ password,setPassword]=useState('')
   

    const handleChangeE = ({target}) => {
        setEmail(target.value)
    }
    const handleChangeP = ({target}) => {
        setPassword(target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
            try {
                const userInf={email, password}
                const loginData = await __LoginUser(userInf)
                console.log(loginData)
                props.history.push('/whispers')
                return 
        } catch (error) {
          
        }
    }

    return (
    <div>
        <Nav />
        <main className="form-signin">
            <form
                onSubmit={handleSubmit}>
                <TextInput
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChangeE}
                  />
                  <TextInput
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChangeP}
                  />
                 <button onClick = {handleSubmit}>
                    Sign In
                </button> 
                
                </form>
            </main>   
        </div>
    )
}


export default LogIn