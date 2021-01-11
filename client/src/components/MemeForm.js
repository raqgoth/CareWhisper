import React from 'react'
import TextInput from './TextInput'

const MemeForm = (props) => {
    return (
      <div className="col-sm-4 text-center">
      <div className = "border-card">
            <form>
            <h3>Upload your motivational quotes memes here!</h3>
            <p>Use imgur to upload motivational memes you find on the web. Instructions below:
                1. go to https://imgur.com/
                2. create an account (optional)
                3. click on new post 
                4. copy and paste the url from the meme, or copy and paste your img to the right
                5. click on hidden
                6. copy the url provided by imgur and paste it into the appropriate box below.
            </p>
            <TextInput
                    placeholder="paste the imgur url here"
                    type="meme"
                    name="newMeme"
                    value={props.newMeme}
                    onChange={props.handleChange}
                />

       
         </form>
        </div>

                <button type = "submit" onClick={props.handleSubmit}>Submit</button>
            </div>
    
   
  )
}
export default MemeForm