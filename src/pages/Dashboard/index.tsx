import React from 'react';
import { Conteudo, Card, AlertCard } from './styles';
import LayoutHeader from '../../components/LayoutHeader';
import LayoutMenu from '../../components/LayoutMenu';

import barCode from '../../img/card/barcode.png'
import professional from '../../img/card/professional.png'
import virus from '../../img/card/virus.png'
import send from '../../img/send.png'

const Dashboard: React.FC = () => {

    return (
        <>
            <LayoutHeader />
            <Conteudo>
                <LayoutMenu />
                <main>
                    <div className="conteudo-top">
                        <h1>Principal</h1>
                        <div className="conteudo-card">
                            <Card cor="#2172FF">
                                <h2>Boleto Online</h2>
                                <div>
                                    <p>R$ 450,51</p>
                                    <img src={barCode} alt="" />
                                </div>
                            </Card>

                            <Card cor="#711899">
                                <h2>Secretaria Online</h2>
                                <div>
                                    <p>Protocolos Abertos: 6</p>
                                    <img src={professional} alt="" />
                                </div>
                            </Card>

                            <Card cor="#283034">
                                <h2>COVID-19</h2>
                                <div>
                                    <p>Recomendações</p>
                                    <img src={virus} alt="" />
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="conteudo-bottom">
                        <h1>Alertas</h1>
                        <AlertCard>
                            <header>
                                <h3>Alteração na data das provas</h3>
                                <label>21/02/2020</label>
                            </header>
                            
                            <label>Descrição</label>
                            
                            <section>
                                <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem numquam inventore iusto asperiores! Voluptas dolore iste nesciunt hic nulla nam ea nostrum? Distinctio optio dicta eum velit atque nisi amet.
                                </p>
                                
                                <span>Veja <img src={send} alt=""/></span>
                            </section>
                        </AlertCard>

                        <AlertCard>
                            <header>
                                <h3>Novas informações sobre a COVID-19</h3>
                                <label>21/02/2020</label>
                            </header>
                            
                            <label>Descrição</label>
                            
                            <section>
                                <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem numquam inventore iusto asperiores! Voluptas dolore iste nesciunt hic nulla nam ea nostrum? Distinctio optio dicta eum velit atque nisi amet.
                                </p>
                                
                                <span>Veja <img src={send} alt=""/></span>
                            </section>
                        </AlertCard>
                    
                        <AlertCard>
                            <header>
                                <h3>Renovação da matrícula em breve</h3>
                                <label>21/02/2020</label>
                            </header>
                            
                            <label>Descrição</label>
                            
                            <section>
                                <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem numquam inventore iusto asperiores! Voluptas dolore iste nesciunt hic nulla nam ea nostrum? Distinctio optio dicta eum velit atque nisi amet.
                                </p>
                                
                                <span>Veja <img src={send} alt=""/></span>
                            </section>
                        </AlertCard>
                    
                    </div>
                </main>
            </Conteudo>
        </>
    )
}

export default Dashboard;