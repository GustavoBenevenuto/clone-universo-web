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
            text-decoration: none;
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
        
        .dropdown {
            position: relative;
            display: inline-block;
        }

        .conteudo-dropdown {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 50px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .conteudo-dropdown a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        }

        .conteudo-dropdown a:hover {
            background-color: #f1f1f1;
        }

        .dropdown:hover .conteudo-dropdown {
            display: block;
        }
    }
`;