
import '../styles/Whisper.css'
import { Form } from 'react-final-form';
import CustomField from "../components/CustomField";
import { __AddWhisper } from "../services/WhisperServices";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { AddWhisper, NewWhisper } from '../store/actions/WhisperActions'

const WhisperForm = (props) => {
    const history = useHistory();
    const validators = (values)=> {
        const {title,content,grateful} = values;
        const errors = {}
    
        if (!title) {
            errors.title = 'Title is required';
        }

        if (!content) {
            errors.content = 'Content required';
        }

        if (!grateful) {
            errors.grateful = 'Greateful required';
        }
    
        return errors
    }

    const onSubmit = async values=>{
        const {title,content,grateful} = values;
        const user_id = localStorage.getItem("user_id")
        console.log(values);
        try {
           const obj = {user_id,title,content,grateful}
           const wishper = await  __AddWhisper(obj)
           props.addWhisper(obj)
           history.push('/whispers')
        } catch (error) {
            throw error
        }
       
    }



    return (
        <div className="text-center">
            <div className = "border-card mt-4 m-auto">
                <Form
                        validate={validators}
                        onSubmit={onSubmit}
                        render={(formProps) =>(
                            <>
                                 <h4>Whisper Entry</h4>
                                <p>Your Whisper Title</p>
                                <CustomField name="title" type="text" label=""   placeholder="Type Your Whisper Title Here"  className="mb-0"/>
                                <p>Your Whisper Entry</p>
                                <CustomField name="content" type="textarea" label=""   placeholder="Type Your Whisper Entry Here"  className="mb-0"/>
                                <p>Three Things You Are grateful For Today</p>
                                <CustomField name="grateful" type="textarea" label=""   placeholder="Type Your Grateful  Entry Here"  className="mb-0"/>
                                <button className="btn btn-primary" type = "submit" onClick={formProps.handleSubmit} disabled={formProps.submitting} >Submit</button>  
                            </>
                        )} 
                />
            </div>
        </div> 
    
         
    )
}

const mapStateToProps = (state) => {
    //   console.log(state)
    return {
      whisperState: state.WhisperState
      //{whisperState}
    }
  }
  const mapActionsToProps = (dispatch) => {
    return {
      addWhisper: (newWhisper) => dispatch(AddWhisper(newWhisper)),
      newWhisper: (formValue) => dispatch(NewWhisper(formValue)),
      
    }
  }

  export default connect(mapStateToProps, mapActionsToProps)(WhisperForm)