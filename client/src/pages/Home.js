import React,{ useEffect, useState } from "react";
import Nav from "../components/Nav"
import {__GetWhispers} from '../services/WhisperServices'
import Whisper from '../components/Whisper'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import WhisperEntry from "../components/WhisperEntry";


const Home = (props) => {
  const [whispers, setWhispers] = useState([]);
    
  const getWhispers = async() => {
    try{
        const res = await __GetWhispers(props.currentUser.id)
        console.log(whispers)
        setWhispers(res)
    } catch(error){
        console.log(error)
    }
}

const DeleteWhisper = async (whisperId) => {
  try {
      const deleteWhisper= await DeleteWhisper(whisperId)
      props.history.push('/whispers')
  }
  catch (error) {
      console.log(error)
  }
}
//life cicle
useEffect(() => {
  getWhispers()
    })
}, []

    return (
      <div className="home">
          <Nav />
          <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        {whispers.map(whisper=> 
                            (<Whisper 
                                key={whisper_id}
                                id={whisper_id}
                                title ={whisper.title} 
                                content={whisper.content} 
                                grateful={whisper.grateful}
                            />)
                        )}
                    </div>
                  </div>
          </div>
     
        </div>
    )
  
  
  
  export default Home
