import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../App.js';
import Admin from '../Admin.js';
import Login from '../Pages/Login';
import Buttons from '../Pages/UI/Buttons';
import NoMatch from '../Pages/NoMatch';



export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login} />

                </App>
            </HashRouter>
        )
    }
}