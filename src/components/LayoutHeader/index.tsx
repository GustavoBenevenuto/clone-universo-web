import React from 'react';
import { FiSettings, FiBell } from 'react-icons/fi'
import { Header } from './styles';

import logo from '../../img/logo-universo.png';
import perfil from '../../img/Gustavo-Perfil.png';

const LayoutHeader: React.FC = () => {

    return (
        <Header>
            <div className='div-left'>
                <img src={logo} alt="" />
                <a>Universo</a>
            </div>

            <div className='div-right'>
                <FiBell color="#2172FF" size={20} />
                <FiSettings className="FiSettings" color="#2172FF" size={20} />
                <img src={perfil}/>
            </div>
        </Header>
    )
}

export default LayoutHeader;