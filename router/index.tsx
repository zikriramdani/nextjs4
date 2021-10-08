import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import IndexPage from '../pages/index';
 
class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/mengundang?name=:title" exact component={IndexPage} />
                    <Redirect exact from="*" to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Index;