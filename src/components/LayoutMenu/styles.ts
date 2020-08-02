import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 350px;
    background-color: #DFE3E3;
    padding-top: 20px; 

    div {
        display: flex;
        align-items: center;
        padding-left: 20px;
        padding-top: 25px;
        transition: transform 0.2s;   

        img{
            width: 40px;
        }

        a{
            color: #0F2B65;
            font-size: 18px;
            font-weight: 500;
            padding-left: 20px;
            text-decoration: none;
        }

        &:hover{
            cursor: pointer;
            color: #00143E ;
            transform: translateX(10px);
        }

    }
`;