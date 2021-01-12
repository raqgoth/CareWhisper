import React, { useState } from 'react'
import {__LoginUser} from '../services/UserServices'
import TextInput from '../components/TextInput'
import Nav from '../components/Nav'
import '../styles/SignIn.css'

import { Form } from 'react-final-form';
import CustomField from "../components/CustomField";

const LogIn = (props)=>{
 
    const [formError,setFormError]=useState(false)

      const validators = (values)=> {
        const {email,password} = values;
        const errors = {}
    
        if (!email) {
            errors.email = 'Email required';
        }

        if (!password) {
            errors.password = 'Password required';
        }
    
        return errors
    }

    const onSubmit = async values=>{
        const {email,password} = values;
        try {
            const userInf={email, password}
            const loginData = await __LoginUser(userInf)
            const {user} = loginData
            localStorage.setItem('user_id',user.id);
            setFormError(false)     
            props.history.push('/whispers')
        } catch (error) {
          setFormError(true)
        }
       
    }

    

    return (
    <div>
        <Nav />
        <main className="form-signin">
            {formError &&<div className="alert alert-danger">Username or password is not valid</div>}
            <Form
                    validate={validators}
                    onSubmit={onSubmit}
                    render={(formProps) =>(
                        <>
                            <h1 className="h3 mb-3 fw-normal">Log In</h1>
                            <CustomField name="email" type="text" label=""   placeholder="Your Email"  className="mb-0"/>
                            <CustomField name="password" type="password" label=""   placeholder="Your Password" />
                            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={formProps.handleSubmit} disabled={formProps.submitting}>Sign in</button>
                        </>
                    )}
            /> 
        </main>
        
        </div>
    )
}


export default LogIn