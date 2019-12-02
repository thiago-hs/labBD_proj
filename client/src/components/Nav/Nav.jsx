import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
        <ul className="Nav nav flex-column justify-content-center pr-sm-3 nav-pills h-100 border-right border-secondary">
          <li className="nav-item">
            <NavLink exact to="/produtos" activeClassName="active" className="nav-item nav-link">
              Produtos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/categorias" activeClassName="active" className="nav-item nav-link">
              Categorias
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/cidades" activeClassName="active" className="nav-item nav-link">
              Cidades
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/fornecedores" activeClassName="active" className="nav-item nav-link">
              Fornecedores
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/transportadoras" activeClassName="active" className="nav-item nav-link">
              Transportadoras
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/lojas" activeClassName="active" className="nav-item nav-link">
              Lojas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/entradas" activeClassName="active" className="nav-item nav-link">
              Entradas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/saidas" activeClassName="active" className="nav-item nav-link">
              Saídas
            </NavLink>
          </li>
      </ul>
  );
}

export default Nav;
