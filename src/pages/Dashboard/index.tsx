import React from 'react';
import { Conteudo, Card } from './styles';
import LayoutHeader from '../../components/LayoutHeader';
import LayoutMenu from '../../components/LayoutMenu';

import barCode from '../../img/card/barcode.png'

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
                            <Card>
                                <h2>Boleto Online</h2>
                                <div>
                                    <p>R$ 450,51</p>
                                    <img src={barCode} alt="" />
                                </div>
                            </Card>

                            <Card>
                                <h2>Boleto Online</h2>
                                <div>
                                    <p>R$ 450,51</p>
                                    <img src={barCode} alt="" />
                                </div>
                            </Card>
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