import React from 'react'

const SignUpForm = (props) => {
    return (
        <form>
            <input
            type="text"
            name="name"
            value={props.name}
            onChange= {props.handleChange}
            />
            <input
            type="string"
            name="email"
            value={props.email}
            onChange={props.handleChange}
            />
            <input
            type = "string"
            name="password"
            value= {props.password}
            onChange = {props.handleChange}
            />
            <button type="submit" onClick={props.handleSubmit}>
          Sign Up
        </button>
        </form>
    )
}
export default SignUpForm
