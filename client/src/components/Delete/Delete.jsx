import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Delete.scss';
import { Redirect, Link, useParams } from 'react-router-dom';

function Delete(props){
    /*
        deleteStatus {
            0 = 'waiting confirmation';
            1 = 'confirmed';
            2 = 'deleting';
            3 = 'deleted successfully';
            4 = 'delete failed';   
        } 
    */
   const [deleteStatus, setDeleteStatus] = useState(0);
   const { id } = useParams();

   function deleteResource(base,src,id) {
        setDeleteStatus(2);  
        console.log(base+src+id);
        axios.delete(`${base+src}/${id}`)
        .then(res => {
            setDeleteStatus(3);
        })
        .catch(err => {
            setDeleteStatus(4);
        })
   }

   useEffect(() => {
        if(deleteStatus === 1){
            deleteResource(props.baseURL,props.dataSrc,id);
        }
   });

   return (
       (deleteStatus === 0) ? (
           <div className="Details confirmation h-100 d-flex flex-column justify-content-center align-items-center">
               <div className="row text-center">
                    <h5>Confirmação</h5>
               </div>
               <div className="row text-center">
                    <p>Você tem certeza que quer deletar esse registro ?</p>
               </div>
               <div className="row d-flex justify-content-center">
                    <Link 
                        to={props.indexURL} 
                        className="btn btn-outline-primary"
                    >
                        Cancel
                    </Link>
                    <button 
                        onClick={()=>setDeleteStatus(1)}
                        className="btn btn-primary"
                    >
                        Confirm
                    </button>

               </div>
           </div>
       ):(deleteStatus === 1 || deleteStatus === 2) ? (
           <div className="Details deleting h-100 d-flex justify-content-center align-items-center">
               deleting ...
           </div>
       ):(deleteStatus === 3) ? (
        <div className="Details loaded">
            <Redirect to={props.indexURL} />
        </div>
        ):(
           <div className="Details error h-100 d-flex justify-content-center align-items-center">
               error
           </div>
       )
   );
}

export default Delete;