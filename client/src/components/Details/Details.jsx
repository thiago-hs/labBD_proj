import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './Details.scss';

function Details(props){
    /*
        fetchStatus {
            0 = 'not loaded yet';
            1 = 'loading';
            2 = 'loaded successfully';
            3 = 'load failed';   
        } 
    */
   const [fetchStatus, setfetchStatus] = useState(0);
   const [payloadData, setpayloadData] = useState([]);
   let { id } = useParams();

   function fetchData(base,src,id) {
       setfetchStatus(1);  
       console.log(base+src+id);
       axios.get(`${base+src}/${id}`)
       .then(res => {
           console.log(res.data[0]);
           setpayloadData(res.data[0]);
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
   });

   return (
       (fetchStatus === 0 || fetchStatus === 1) ? (
           <div className="Details loading">
               <h1 className="display-4 mb-10">{props.title} - {id}</h1>
               loading...
           </div>
       ):(fetchStatus === 2) ? (
           <div className="Details loaded">
               <h1 className="display-4 mt-sm-3 mb-sm-5">{props.title} - {id}</h1>
               <div className="row">
                    <div className="col-6">
                    {   
                        Object.keys(payloadData)
                        .map((i,idx)=> (
                            <p key={idx}>{i}</p>
                        ))
                    }
                    </div>
                    <div className="col-6">
                    {
                        Object.keys(payloadData)
                        .map((i,idx)=> (
                            <p key={idx}>{payloadData[i]}</p>
                        ))
                    }
                    </div>
               </div>
           </div>
       ):(
           <div className="Details error">
               <h1 className="display-4 mb-10">{props.title} - {id}</h1>
               error
           </div>
       )
   );
}

export default Details;