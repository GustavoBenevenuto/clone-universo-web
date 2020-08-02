import styled from 'styled-components';

interface CardProps {
    cor: string;
}

export const Conteudo = styled.div`
    display: flex;

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        
        h1{ 
            font-size: 35px;
        }

        .conteudo-top{
            display: flex;
            flex-direction: column;
            flex: 1.3;
            border-bottom: 2px solid #CCC;
            margin-top: 20px;
            padding-left: 35px;

            .conteudo-card {
                display: flex;
                margin-top: 50px;
            }
        }

        .conteudo-bottom{
            display: flex;
            flex: 3;
            flex-direction: column;
            margin-top: 20px;
            padding: 0px 35px;
        }
    }
`;

export const AlertCard = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    border: 1px solid #CCC;
    border-radius: 15px;
    padding: 10px;
    margin-top: 20px;

    h3 {
        font-size: 23px;
    }

    label {
        color: #AAA;
    }

    img{
        width: 25px;
        margin-left: 5px
    }

    header{
        display: flex;
        justify-content: space-between;
    }

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            width: 1000px;
        }

        span {
            display: flex;
            color: #2172FF;
        
            &:hover {
                cursor: pointer;
                opacity: 0.7;
            }
        }
    }
`;

export const Card = styled.a<CardProps>`
    height: 150px;
    width: 350px;
    border-radius: 12px;
    background-color: ${props =>  props.cor ? props.cor : '#2172FF'};
    color: #FFF;
    padding : 0px 25px;
    margin-right: 35px;
    
    &:hover{
        cursor: pointer;
        opacity: 0.9;
    }

    h2{
        margin: 20px 0px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 22px;
    }

`;