import styled from 'styled-components';

import imagemPrincipal from '../../img/login.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const ConteudoEsquerdo = styled.div`
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    background-color: #f5f5f5;
    padding: 0px 40px;

    h1 {
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 50px;

        span{
            display: block;
        }
    }

    input{
        background-color: #f5f5f5;
        padding: 10px 15px;
        margin: 20px 0px;
        border: none;
        border-bottom: 2px solid #CCC;
        font-size: 18px;
        color: gray;

        &:focus{
            border-color: #0F2B65;
        }
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 50px;

        a:hover{
            cursor: pointer;
            color: #00143E;
        }
    }

    .Link {
        padding: 20px;
        outline: none;
        border: none;
        border-radius: 15px;
        background-color: #0F2B65;
        font-size: 25px;
        color: #FFF;
        text-decoration: none;
        text-align: center;

        &:hover{
            cursor: pointer;
            background-color: #00143E;
        }
    }
`;

export const ConteudoDireito = styled.div`
    flex: 1;
    background: url(${imagemPrincipal}) no-repeat center #0F2B65;
    background-size: contain;
`;