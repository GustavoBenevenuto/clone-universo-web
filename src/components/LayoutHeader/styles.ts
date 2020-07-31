import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #202C32;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;

    .div-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        
        a{
            margin-left: 15px;
            color: #2172FF;
            font-size: 30px;
            font-weight: bold;
        }

        img{
            width: 50px;
        }
    }

    .div-right {
        display: flex;
        align-items: center;
        padding-right: 20px;
        cursor: pointer;
        
        img{
            width: 50px;
        }

        .FiSettings{
            margin: 10px;
        }
    }
`;