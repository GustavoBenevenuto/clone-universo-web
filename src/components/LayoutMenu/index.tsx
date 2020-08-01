import React, { useState } from 'react';
import { Container } from './styles';

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

    return (
        <Container>
            {
                imagem.map((item, index) => {
                    return (
                        <div key={index} >
                            <img src={item} alt="" />
                            <a>{titulo[index]}</a>
                        </div>
                    )
                })
            }
        </Container>
    )
}

export default LayoutMenu;