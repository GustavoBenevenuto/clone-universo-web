import React, { useState } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

import cap from '../../img/cap.png';
import boss from '../../img/boss.png';
import school from '../../img/school.png';
import book from '../../img/book.png';
import video from '../../img/video.png';
import bank from '../../img/bank.png';
import contract from '../../img/contract.png';

const LayoutMenu: React.FC = () => {

    const imagem = [cap, boss, school, book, video, bank, contract];
    const titulo = ['Acadêmico', 'Agenda Gestor', 'AVA', 'Biblioteca', 'EAD', 'Financeiro', 'Secretaria'];
    const url = ['academico', 'agenda-gestor', 'ava', 'biblioteca', 'ead', 'financeiro', 'secretaria'];

    return (
        <Container>
            {
                imagem.map((item, index) => {
                    return (
                        <div key={index} >
                            <img src={item} alt="" />
                            <Link to={url[index]}>{titulo[index]}</Link>
                        </div>
                    )
                })
            }
        </Container>
    )
}

export default LayoutMenu;