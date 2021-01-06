import React,{ useEffect, useState } from "react";
import Nav from "../components/Nav"
import {GetWhispers} from '../services/WhisperServices'
import Whisper from '../components/Whisper'

const WhisperDetails = (props)=>{

    const [whispers,setWhisper]=useState([])
    const [get, setGet]=useState(false)


    const getWhispers =async()=>{
        try {
            const whispers = await GetWhispers(props.currentUser.id)
            setWhisper(whispers)
        } catch (error) {
            throw error 
        }
    }
    
    const DeleteWhisper = async (whisperId) => {
        try {
            const deleteWhisper = await DeleteWhisper(whisperId)
            props.history.push('/whispers')
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getWhispers()
    },[get])
    return(
        <div className= 'title'>
            <Whisper />
        
        </div>
    )
}
                          
                                        

export default WhisperDetails
