import React, {useState, useEffect} from 'react';
import './Apresentacao.scss';

function Apresentacao(props){
   return (
       <div className="Apresentacao h-100 d-flex flex-column justify-content-top align-items-center">
            <div className="mt-sm-4">
                <i className="fas fa-database text-secondary"></i>
            </div>
            <h1 className="text-secondary mt-sm-4">Trabalho de Laboratório de Banco de Dados</h1>
           <div>
           <ul className="list-group mt-sm-5 mb-sm-5">
              <li className="list-group-item disabled bg-warning text-dark" aria-disabled="true">Professor</li>
              <li className="list-group-item">JOILSON DE SOUZA CARDOSO</li>
            </ul>
           </div>
           <div>
           <ul className="list-group">
              <li className="list-group-item disabled bg-primary text-white" aria-disabled="true">Integrantes</li>
              <li className="list-group-item">Thiago Henrique da Silva</li>
              <li className="list-group-item">Vitor Martinelli Lobo</li>
              <li className="list-group-item">Daniel Lopez</li>
            </ul>
           </div>
            <p className="mt-sm-5"><b>Data:</b> {(new Date()).toLocaleDateString()}</p>
       </div>
   );
}

export default Apresentacao;