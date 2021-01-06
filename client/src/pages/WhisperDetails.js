import React,{ useEffect, useState } from "react";
import Nav from "../components/Nav"

const WhisperDetails = (props) => {
    const {match:{params}} = props;
    const [whisper,setWhisper] = useState([]);
    useEffect(() => {
        WhisperServices.getById(params.whisperId)
        .then(res=>{
            setWhisper(res.data);            
        });
     }, []);

    return (
        <div className="WhisperDetails">
             <Nav title="Whisper Details" />
             <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">                       
                        <Whisper
                            key={whisper._id}
                            id={whisper._id}
                            title ={whisper.title} 
                            content={whisper.newWhisper}
                            newGrateful={whisper.newGrateful}
                        />
                    </div>
                </div>
             </div>
        </div>
    );
}
  
export default WhisperDetails;