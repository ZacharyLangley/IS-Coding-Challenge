import React from 'react';
import { Route, Switch } from 'react-router'
import Room from './Room';

const Routes = () => (
    <Switch>
        <Route exact path={'/'} component={Room} />
        <Route render={() => <div>{'404 invalid page'}</div>} />
    </Switch>
);

export default Routes