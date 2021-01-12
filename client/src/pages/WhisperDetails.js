import React,{useEffect, useState} from 'react'
import Nav from "../components/Nav"
import {__GetWhisper } from '../services/WhisperServices'
import {Link} from 'react-router-dom'
const WhisperDetails = (props) => {
    const {match:{params}} = props;

    const [whisper,setWhisper] = useState({});
    useEffect(() => {
        getWhisper()
   }, []);

   const getWhisper = async  ()=>{
    
        try{
            const obj = await __GetWhisper(params.whisperId)
            setWhisper(obj)
        }catch(error){
            throw error
        }
   }

    return (
        <div >
            <Nav />
            <div className = "border-card mt-4 m-auto">
                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input type="text" className="form-control" value={whisper.title} disabled/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Content</label>
                    <textarea className="form-control" rows="3" value= {whisper.content}  disabled />
                </div>
                <div class="mb-3">
                    <label className="form-label">Grateful</label>
                    <textarea className="form-control" rows="3" value={whisper.grateful} disabled />
                </div>
                <Link to ="/whispers" className="btn btn-primary">Go back</Link>
            </div>
        </div> 
    )
}



  export default WhisperDetails
    