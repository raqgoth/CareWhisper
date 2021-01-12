import React, { useState } from 'react'
import { Form } from 'react-final-form'
import CustomField from "../components/CustomField"


const MemeForm = (props) => {
    const [formError,setFormError]= useState(false)

      const validators = (values)=> {
        const {meme} = values;
        const errors = {}
    
        if (!meme) {
            errors.meme = 'Meme is required';
        }
        return errors
    }

    const onSubmit = async values=>{
       console.log(values)
    }

    return (
        <div className="col-sm-4 text-center">
            <div className = "border-card">
                <Form
                        validate={validators}
                        onSubmit={onSubmit}
                        render={(formProps) =>(
                        <>
                            <h3>Upload your motivational quotes memes here!</h3>
                            <p>Use imgur to upload motivational memes you find on the web. Instructions below:
                                1. go to https://imgur.com/
                                2. create an account (optional)
                                3. click on new post 
                                4. copy and paste the url from the meme, or copy and paste your img to the right
                                5. click on hidden
                                6. copy the url provided by imgur and paste it into the appropriate box below.
                            </p>
                            <CustomField name="meme" type="text" label=""   placeholder="Paste the imgur url here"  className="mb-0"/>
                            <button className="btn btn-primary" type="submit" onClick={formProps.handleSubmit} disabled={formProps.submitting} >Submit</button>
                        </>
                    )}
                />   
            </div>

                
        </div>
    
   
  )
}
export default MemeForm