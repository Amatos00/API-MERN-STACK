import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroFrom from './pages/CadastroForm';
import EditarCadastro from './pages/EditarCadastro';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro" component={CadastroFrom} />
            <Route path="/edicao/:id" component={EditarCadastro} />
        </Switch>
    )
}

export default Routes;