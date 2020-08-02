import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiBell } from 'react-icons/fi'
import { Header } from './styles';

import logo from '../../img/logo-universo.png';
import perfil from '../../img/Gustavo-Perfil.png';

const LayoutHeader: React.FC = () => {

    return (
        <Header>
            <div className='div-left'>
                <img src={logo} alt="" />
                <Link to='/dashboard'>Universo</Link>
            </div>

            <div className='div-right'>
                <FiBell color="#2172FF" size={20} />
                <div className="dropdown">
                    <FiSettings className="FiSettings" color="#2172FF" size={20} />
                    <div className="conteudo-dropdown">
                        <Link to="/">Sair</Link>
                    </div>
                </div>
                <img src={perfil} />
            </div>
        </Header>
    )
}

export default LayoutHeader;