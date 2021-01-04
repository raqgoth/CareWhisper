import React from 'react'

const WhisperForm = (props) => {
    return (
        <form>
        <input
          type="text"
          name="newWhisper"
          value={props.newWhisper}
          onChange={props.handleChange}
          />
          <button type="submit" onClick={props.handleSubmit}>
          Add Whisper
        </button>
        </form>
    )
}
export default WhisperForm
