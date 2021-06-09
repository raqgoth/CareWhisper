import React from "react";
import Moment from 'moment';
import {__RemoveWhisper} from "../services/WhisperServices";


const Card = (props) => {
    
    Moment.locale('en');
        
    const deletePost = ()=>{
        __RemoveWhisper(props.id).then(res=>{
            alert(res.data.message);
            window.location="/home";
        })
    }

    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-sm-8 row">
                   <div className="col-sm-4 text-center">
                        <span className="material-icons avatar-icon">account_circle</span>
                   </div>
                   <div className="col-sm-8">
                        <span>{props.title}</span><br/>
                        <span>{ Moment(props.date).format('d MMM YYYY') }</span>
                   </div>
                </div>
                <div className="col-sm-4 p-2 text-right">
                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>{ deletePost() }}>Delete</button>
                </div>
            </div>
            <h5 className="card-title p-2">{props.title}</h5>
            <p className="card-text p-2 text-justify">{props.content}</p>
            <div className="text-right p-2">
            
            </div>
           
                    
            </div>
            
        
    );
}
  
export default Card;

