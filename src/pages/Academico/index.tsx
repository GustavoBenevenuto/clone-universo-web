import React, { useState, useRef } from 'react';
import { Conteudo } from './styles';
import LayoutHeader from '../../components/LayoutHeader';
import LayoutMenu from '../../components/LayoutMenu';


const Dashboard: React.FC = () => {

    const menu = ['Atividades', 'Aulas Praticas', 'Estudos e Trefas', 'Inclusão e Exclusão', 'Horários', 'Horários', 'Notas e Faltas', 'Plano de Estudos', 'Projeto de Extensão', 'TCC']

    const [classButton, setClassButton] = useState('');

    function lidandoComClick() {
        setClassButton('btn-selecionado');
    }

    return (
        <>
            <LayoutHeader />
            <Conteudo>
                <LayoutMenu />
                <main>
                    <div className="conteudo-top">
                        <h1>Acadêmico</h1>
                        <ul>
                            {menu.map((item, index) => {
                                return (
                                    <li key={index} id={index.toString()}>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>

                        <h2>Curso</h2>
                        <div className="conteudo-card">
                            <button className={classButton} onClick={lidandoComClick}>Sistemas de informação</button>
                            <button>Direito</button>
                        </div>
                    </div>

                    <div className="conteudo-bottom">
                        
                    </div>
                </main>
            </Conteudo>
        </>
    )
}

export default Dashboard;