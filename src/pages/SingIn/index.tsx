import React, {useState} from 'react';
import { Container, ConteudoEsquerdo, ConteudoDireito } from './styles';
import { Link } from 'react-router-dom';

const SigIn: React.FC = () => {

    const [chkLembrar, setLembrar] = useState(false);
    const [iptMatricula, setMatricula] = useState('');
    const [iptSenha, setSenha] = useState('');

    function lidarLembrar(){
        setLembrar(!chkLembrar);
    }

    return (
        <Container>
                <ConteudoEsquerdo>
                    <h1>
                        Olá,
                        <span>Bem vindo a Universo</span>
                    </h1>

                    <input type="text" name="iptMatricula" placeholder="Matrícula" />

                    <input type="password" name="iptSenha" placeholder="Senha"/>

                    <div>
                        <a onClick={lidarLembrar}>
                            <input type="checkbox" checked={chkLembrar} name="chkLembrar"/> Lembar
                        </a>
                        <a> Esqueceu a senha</a>
                    </div>

                    <Link className="Link" to={'/dashboard'}>Entrar</Link>
                </ConteudoEsquerdo>

                <ConteudoDireito>
                    b
                </ConteudoDireito>
        </Container>
    )
}

export default SigIn;