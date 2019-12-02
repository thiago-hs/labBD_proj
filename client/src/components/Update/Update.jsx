import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Form, Input, Select } from '@rocketseat/unform';
import {Redirect,Link,useParams} from 'react-router-dom';

import './Update.scss';

function Update(props){
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

    /*
        fetchStatus {
            0 = 'not loaded yet';
            1 = 'loading';
            2 = 'loaded successfully';
            3 = 'load failed';   
        } 
    */
   const [fetchStatus, setfetchStatus] = useState(0);

   const [formData, setFormData] = useState(null);
   const [optionsData, setOptionsData] = useState({});
   const [payloadData, setPayloadData] = useState(null);

   let { id } = useParams();

   function submitData(base,src,id) {
        setSubmitStatus(2); 
        axios.put(`${base+src}/${id}`,formData)
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

   function fetchData(base,src,id) {
       setfetchStatus(1);  
       console.log(base+src+id);
       axios.get(`${base+src}/${id}`)
       .then(res => {
           console.log(res.data[0]);
           let dateFields = Object.keys(props.form).filter(prop => props.form[prop].type === 'date');
           let formatedResponse = {};
           for (const key in res.data[0]) {
               if (res.data[0].hasOwnProperty(key)) {
                   if(dateFields.includes(key)){
                    formatedResponse[key] = res.data[0][key].split('T')[0];
                   }else{
                    formatedResponse[key] = res.data[0][key];
                   }
               }
           }
           setPayloadData(formatedResponse);
           setfetchStatus(2);
       })
       .catch(err => {
           setfetchStatus(3);
       })
   }

   useEffect(() => {
        if(fetchStatus === 0){
            fetchData(props.baseURL,props.dataSrc,id);
        }
        if(submitStatus === 1){
            submitData(props.baseURL,props.dataSrc,id);
        }
   });

    function handleSubmit(data) {
        setFormData(data);
        setSubmitStatus(1);
    }
    
      return (
        (fetchStatus === 0 || fetchStatus === 1) ? (
            <div className="Details loading">
                <h1 className="display-4 mb-10">{props.title} - {id}</h1>
                loading...
            </div>
        ):(fetchStatus === 2) ? (
            (submitStatus === 0 || submitStatus === 1) ? ( 
                <Form 
                    className="container h-100 d-flex flex-column justify-content-start mt-sm-5" 
                    onSubmit={handleSubmit} 
                    initialData={payloadData}
                >
                <h1 className="display-4 mb-10">{props.title} - {id}</h1>
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
                            } else {
                                return (
                                    <div key={idx} className="form-group row">
                                        <label htmlFor={i} className="col-6 col-form-label d-flex justify-content-end" >{i}</label>
                                        <div className="col-6 d-flex justify-content-start">
                                            <Input name={i} type={props.form[i].type} />
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
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
                </Form>
                ):(submitStatus === 2) ? (
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        Sendind ...
                    </div>
                ):(submitStatus === 3) ? (
                    <Redirect to={`${props.indexURL}/${id}`} />
                ):(
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        Error On Submit ...
                    </div>
                )
        ):(
            <div className="Details error">
                <h1 className="display-4 mb-10">{props.title} - {id}</h1>
                Error On Fetching Data ...
            </div>
        )
      );
}

export default Update;