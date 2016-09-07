import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Page2Handler from './component/page2.js';
import MainHandler from './component/main.js';
import Page1Handler from './component/page1.js';



let routes = (
    <Route name="main" path="/" handler={MainHandler}>
        <Route name="page1" path="page1" handler={Page1Handler}/>
        <Route name="page2" path="page2/:id" handler={Page2Handler}/>
        <DefaultRoute handler={Page1Handler}/>
    </Route>
);




Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});