import styled from 'styled-components';


export const Conteudo = styled.div`
    display: flex;

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        
        .conteudo-top{
            display: flex;
            flex-direction: column;
            flex: 1.3;
            border-bottom: 2px solid #CCC;
            margin-top: 20px;

            h1{ 
                font-size: 35px;
                margin-left: 35px;
            }

            .conteudo-card {
                display: flex;
                margin-top: 50px;
            }
        }

        .conteudo-bottom{
            display: flex;
            flex: 3;
        }
    }
`;

export const Card = styled.div`
    height: 150px;
    width: 350px;
    border-radius: 12px;
    margin-left: 35px;
    background-color: #2172FF;
    color: #FFF;
    padding : 0px 25px;

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