import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Hs from './components/Hs/Hs'
import Jh from './components/Jh/Jh'
import Newsfeed from './components/Newsfeed/Newsfeed'
import Admin from './components/Admin/Admin'
import Registration from './components/Registration/Registration'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hs' component={Hs} />
        <Route path='/jh' component={Jh} />
        <Route path='/newsfeed' component={Newsfeed} />
        <Route path='/registration' component={Registration} />
        <Route path='/admin' component={Admin} />
    </Switch>
)