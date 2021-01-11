import React from "react";
import { Field } from 'react-final-form';

const CustomField =  ({ name, label,type, placeholder,options=[],floating=false }) => {

    if(floating===true){
        return (
            <Field
                name={name}
                render={({ input, meta }) => (
                    <div className="form-floating mb-3">
                        {type==='textarea' && <textarea placeholder={placeholder} {...input}  className="form-control" rows="3"></textarea>}
                        {type==='text' && <input  {...input}   placeholder={placeholder}  className="form-control"  />}
                        {type==='password' && <input type="password" {...input}   placeholder={placeholder}  className="form-control"  />}
                        {label!=='' && <label className="text-muted">{label}</label>}
                        {meta.touched && meta.error && <small  className="form-text text-danger">{meta.error}</small>}
                    </div>
                )}
            />
        )

    }

    return(
        <Field
        name={name}
        render={({ input, meta }) => (
            <div className="mb-3">
                {label !=='' && <label className="form-label text-muted">{label}</label> }
                {type==='text' && <input  {...input}   placeholder={placeholder}  className="form-control"  />}
                {type==='textarea' && <textarea placeholder={placeholder} {...input}  className="form-control" rows="3"></textarea>}
                {type==='password' && <input type="password" {...input}   placeholder={placeholder}  className="form-control"  />}
                {type==='select' && (
                    <select {...input} className="form-select">
                        <option key="-1" value="">{placeholder}</option>
                        {options.map((item,index)=>
                            (<option key={index} value={item.id}>{item.text}</option>)
                        )}
                    </select>
                    )}
                {meta.touched && meta.error && <small  className="form-text text-danger">{meta.error}</small>}
            </div>
        )} />
    )
}
  
export default CustomField;