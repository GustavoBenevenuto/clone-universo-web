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
    
    return (
        <Container>
            <div>
                <img src={cap} alt=""/>
                <a>Acadêmico</a>
            </div>

            <div>
                <img src={boss} alt=""/>
                <a>Agenda Gestor</a>
            </div>

            <div>
                <img src={school} alt=""/>
                <a>AVA</a>
            </div>

            <div>
                <img src={book} alt=""/>
                <a>Biblioteca</a>
            </div>

            <div>
                <img src={video} alt=""/>
                <a>EAD</a>
            </div>

            <div>
                <img src={bank} alt=""/>
                <a>Financeiro</a>
            </div>

            <div>
                <img src={contract} alt=""/>
                <a>Secretaria</a>
            </div>
        </Container>
    )
}

export default LayoutMenu;