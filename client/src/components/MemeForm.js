import React from 'react'

const MemeForm = (props) => {
    return (
        <div>
            <h3>Upload your motivational quotes memes here!</h3>
            <p>Use imgur to upload motivational memes you find on the web. Instructions below:
                1. go to https://imgur.com/
                2. create an account (optional)
                3. click on new post 
                4. copy and paste the url from the meme, or copy and paste your img to the right
                5. click on hidden
                6. copy the url provided by imgur and paste it into the appropriate box below.
            </p>
        <form>
            <input
            type="text"
            name="newMeme"
            placeholder="paste the imgur url here"
            label="paste the imgur url here"
            value={props.newMeme}
            onChange= {props.handleChange}
            />
        <button type="submit" onClick={props.handleSubmit}>
        Add Meme
      </button>
      </form>
    </div>
  )
}
export default MemeForm