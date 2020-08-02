import React, { useState } from 'react';
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
                        <h2>Notas e Faltas</h2>

                        <select name="cars" id="cars">
                            <option value="0">Selecione o semestre</option>
                            <option value="volvo">2020 - 2° Semestre</option>
                            <option value="saab">2020 - 1° Semestre</option>
                            <option value="opel">2019 - 2° Semestre</option>
                            <option value="audi">2019 - 1° Semestre</option>
                        </select>

                        <table className="table">
                            <thead className="thead-dark ">
                                <tr>
                                    <th className="font-weight-normal" scope="col">MATÉRIA</th>
                                    <th className="font-weight-normal" scope="col">V1</th>
                                    <th className="font-weight-normal" scope="col">v2</th>
                                    <th className="font-weight-normal" scope="col">VT</th>
                                    <th className="font-weight-normal" scope="col">VS</th>
                                    <th className="font-weight-normal" scope="col">FALTAS</th>
                                    <th className="font-weight-normal" scope="col">MÉDIA PARCIAL</th>
                                    <th className="font-weight-normal" scope="col">MÉDIA FINAL</th>
                                    <th className="font-weight-normal" scope="col">SITUAÇÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ALGORITMOS</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>APROVADO</td>
                                </tr>
                                <tr>
                                    <td>ESTRUTURA DE DADOS</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>APROVADO</td>
                                </tr>
                                <tr>
                                    <td>BANCO DE DADOS</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>15</td>
                                    <td>APROVADO</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </main>
            </Conteudo>
        </>
    )
}

export default Dashboard;