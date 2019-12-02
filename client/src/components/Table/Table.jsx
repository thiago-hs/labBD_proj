import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation,Link} from 'react-router-dom';

import './Table.scss';
const Table = (props) => {
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
    const location = useLocation();

    function fetchData(base,src) {
        setfetchStatus(1);  
        axios.get(base+src)
        .then(res => {
            setpayloadData(res.data);
            setfetchStatus(2);
        })
        .catch(err => {
            setfetchStatus(3);
        })
    }

    useEffect(() => {
        if(fetchStatus === 0){
            fetchData(props.baseURL,props.dataSrc);
        }
    });
    console.log(location);
    return (
        (fetchStatus === 0 || fetchStatus === 1) ? (
            <div className="Table loading h-100">
                <h1 className="display-4 mb-10">{props.title}</h1>
                loading...
            </div>
        ):(fetchStatus === 2) ? (
            <div className="Table loaded h-100">
                <h1 className="display-4 mt-sm-3 mb-sm-5">
                    {props.title} 
                    <Link 
                        className="btn btn-primary ml-sm-4"
                        to={`${location.pathname}/inserir`} 
                    >
                        <i className="fas fa-plus"></i>                 
                    </Link>
                </h1>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        payloadData.map(i=>(
                            <tr key={i[props.idProp]}>
                                <th scope="row">{i[props.idProp]}</th>
                                <td>{i[props.nameProp]}</td>
                                <td>
                                    <Link 
                                        className="btn btn-primary"
                                        to={`${location.pathname}/${i[props.idProp]}`} 
                                    >
                                        <i className="fas fa-clipboard-list"></i>
                                    </Link>
                                    <Link 
                                        className="btn btn-danger"
                                        to={`${location.pathname}/deletar/${i[props.idProp]}`} 
                                    >
                                        <i className="far fa-trash-alt"></i>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        ):(
            <div className="Table error h-100">
                <h1 className="display-4 mb-10">{props.title}</h1>
                error
            </div>
        )
    );
}

export default Table;
