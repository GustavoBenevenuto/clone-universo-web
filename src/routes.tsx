import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SingIn from './pages/SingIn';
import Dashboard from './pages/Dashboard';
import Academico from './pages/Academico';

const Routes = () => {
        return(
            <BrowserRouter>
                <Route component={SingIn} path="/" exact/>
                <Route component={Dashboard} path="/dashboard"/>
                <Route component={Academico} path="/academico"/>
            </BrowserRouter>
        )
}

export default Routes;