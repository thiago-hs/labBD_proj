import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Form, Input, Select } from '@rocketseat/unform';
import {Redirect,Link} from 'react-router-dom';

import './Insert.scss';

function Insert(props){
    /*
        submitStatus {
            0 = 'not valid to submitted';
            1 = 'valid to submitted';
            2 = 'submitting';
            3 = 'submitted successfully';
            4 = 'submit failed';   
        } 
    */
   const [submitStatus, setSubmitStatus] = useState(0);
   const [formData, setFormData] = useState(null);
   const [optionsData, setOptionsData] = useState({});
   const [payloadData, setPayloadData] = useState(null);

   function submitData(base,src,data) {
        setSubmitStatus(2); 
        axios.post(`${base+src}`,formData)
        .then(res => {
            console.log(res.data[0]);
            setPayloadData(res.data[0]);
            setSubmitStatus(3);
        })
        .catch(err => {
            setSubmitStatus(4);
        })
   }

    function getOptions(base,src,selectName,idProp,titleProp){
        axios.get(`${base+src}`)
        .then(res => {
            setOptionsData({
                ...optionsData,
                [selectName]:res.data.map(i =>({
                    id: i[idProp],
                    title: i[titleProp]
                }))
            })
        })
   }

   useEffect(() => {
       if(submitStatus === 1){
            submitData(props.baseURL,props.dataSrc);
       }
   });

    function handleSubmit(data) {
        setFormData(data);
        setSubmitStatus(1);
    }
    
      return (
        (submitStatus === 0 || submitStatus === 1) ? ( 
        <Form className="container h-100 d-flex flex-column justify-content-start mt-sm-5" schema={props.schema} onSubmit={handleSubmit}>
        <div className="form-group">
            {
                Object.keys(props.form)
                .map((i,idx) => {
                    if(props.form[i].type === 'select'){
                        return (
                            <div key={idx} className="form-group row">
                                <label htmlFor={i} className="col-6 col-form-label d-flex justify-content-end" >{i}</label>
                                <div className="col-6 d-flex justify-content-start">
                                    <Select 
                                        name={i} 
                                        required={true} 
                                        options={
                                            optionsData[i] ? optionsData[i]:(
                                                getOptions(props.baseURL,props.form[i].src,i,props.form[i].idProp,props.form[i].titleProp),
                                                []
                                            )
                                            
                                        }
                                    />
                                </div>
                            </div>
                        );
                    }else{
                        return (
                            <div key={idx} className="form-group row">
                                <label htmlFor={i} className="col-6 col-form-label d-flex justify-content-end" >{i}</label>
                                <div className="col-6 d-flex justify-content-start">
                                    <Input name={i} type={props.form[i].type} required={true}/>
                                </div>
                            </div>
                        );
                    }
                })
            }
            <div className="form-group row">
                <div className="col-6 d-flex justify-content-end">
                    <Link 
                        to={props.indexURL} 
                        className="btn btn-outline-primary"
                    >
                        Cancel
                    </Link>
                </div>
                <div className="col-6 d-flex justify-content-start">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
        </Form>
        ):(submitStatus === 2) ? (
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                Sendind ...
            </div>
        ):(submitStatus === 3) ? (
            <Redirect to={props.indexURL} />
        ):(
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                Error ...
            </div>
        )
      );
}

export default Insert;