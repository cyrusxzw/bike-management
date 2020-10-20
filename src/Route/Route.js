import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../App.js';
import Admin from '../Admin.js';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Buttons from '../Pages/UI/Buttons';
import Modals from '../Pages/UI/Modals';
import Notification from '../Pages/UI/Notification';
import Message from '../Pages/UI/Message';
import Loadings from '../Pages/UI/Loadings';
import Tabs from '../Pages/UI/Tabs';
import Gallery from '../Pages/UI/Gallery';
import NoMatch from '../Pages/NoMatch';


import '../Style/common.less';

export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notification}></Route>
                                <Route path="/admin/ui/messages" component={Message}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
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