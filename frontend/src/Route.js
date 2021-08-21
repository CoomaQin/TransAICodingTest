import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Import all page components here
 */
import Home from './App/Home';
import About from './App/About';
import Markdown from './App/Markdown'

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/markdown" component={Markdown} />
        </Switch>
    )
};

export default MainRoute;