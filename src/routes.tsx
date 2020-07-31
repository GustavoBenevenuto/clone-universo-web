import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SingIn from './pages/SingIn';
import Dashboard from './pages/Dashboard';

const Routes = () => {
        return(
            <BrowserRouter>
                <Route component={SingIn} path="/" exact/>
                <Route component={Dashboard} path="/dashboard"/>
            </BrowserRouter>
        )
}

export default Routes;