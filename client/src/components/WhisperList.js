import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { AddWhisper, NewWhisper, RemoveWhisper,GetWhisper,GetWhispers } from '../store/actions/WhisperActions'
import {Link} from 'react-router-dom'

import {__GetWhispers, __RemoveWhisper} from '../services/WhisperServices'

const mapStateToProps = ({whisperState}) => {
  //   console.log(state)
  return {
    whisperState
    //{whisperState}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWhisper: (newWhisper) => dispatch(AddWhisper(newWhisper)),
    removeWhisper: (index) => dispatch(RemoveWhisper(index)),
    newWhisper: (formValue) => dispatch(NewWhisper(formValue)),
    getWhisper:(whisper) => dispatch(GetWhisper(whisper)),
    getWhispers: (whispers) => dispatch(GetWhispers(whispers))
    
  }
}

const WhisperList = (props) => {
    const [list,setList] = useState([]);
    useEffect((props) => {
      fetchWhispers()
   }, []);

   const fetchWhispers = async ()=>{
      try {
          const userId = localStorage.getItem('user_id');
          const data = await __GetWhispers(userId);
          setList(data);
      } catch (error) {
      
      }
   }


   const handleChange = (event) => {
      props.newWhisper(event.target.value)
  }

const handleSubmit = (event) => {
    event.preventDefault()
    props.addWhisper(props.whisperState.newWhisper)
}

const handleRemoveWhisper = async (whisperId) => {
    await  __RemoveWhisper(whisperId);
    setList([]);
    fetchWhispers();
}

    return (
      list ?
      <div className="card card-whispers mt-4" >
         <ul className="list-group list-group-flush">

         
          {list.map((whisper, index) => (
            <li key={whisper.id}  className="list-group-item">
              <Link  to ={`/whisper-details/${whisper.id}`}>
                <h2>{whisper.title}</h2>
              </Link>
              <button onClick={() => handleRemoveWhisper(whisper.id)}>Delete</button>
            </li>
          )
          )}
        
        </ul>
      
      </div>
      
      : 
      <div className="card card-whispers mt-4">
        <h5>add some whispers to your list</h5>
      </div>

    )
}


  export default connect(mapStateToProps, mapDispatchToProps)(WhisperList)
    