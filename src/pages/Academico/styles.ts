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
            align-items: center;
            
            ul{
                display: flex;
                list-style: none;
                padding: 15px 0px;
                
                li {
                    padding: 0px 5px;

                    &:hover{
                        cursor: pointer;
                        opacity: 0.7;
                    }
                }
            }

            .conteudo-card{
                margin-top: 10px;
                
                button{
                    width: 200px;
                    height: 35px;
                    margin-right: 10px;
                    border-radius: 7px;
                    border: 2px solid #00143E;;
                    color: #00143E;

                }

                .btn-selecionado {
                    background-color: #B7D2FF;
                }
            }

        }

        .conteudo-bottom{
            display: flex;
            flex: 3;
            flex-direction: column;
            margin-top: 20px;
            padding: 0px 35px;
            align-items: center;

            select {
                margin-bottom: 20px;
                width: 300PX;
                color: #AAA
            }
        }
    }
`;

