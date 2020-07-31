import React from 'react';
// import { LayoutHeader, LayoutMenu, LayoutConteudoTop, LayoutConteudoBottom } from './styles';
import LayoutHeader from '../../components/LayoutHeader';
import LayoutMenu from '../../components/LayoutMenu';

const Dashboard: React.FC = () => {

    return (
        <>
            <LayoutHeader/>
            <LayoutMenu/>
        </>
    )
}

export default Dashboard;