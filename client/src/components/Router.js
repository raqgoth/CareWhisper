import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignOut from '../pages/SignOut'
import SignUp from '../pages/SignUp'
import WhisperDetails from '../pages/WhisperDetails'
import Whispers from '../pages/Whispers'
import CreateWhisper from '../pages/CreateWhisper'
import AuthenticatedRoute from './AuthenticatedRoute'
const Routes = ({ user, items, setUser, clearUser, addItem }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => (user ? <Home /> : <Landing {...props} items={items} />)}
        />
        <Route
            path="/sign-in"
            render={props => <SignIn {...props} setUser={setUser} />}
        />
        <Route
            path="/sign-up"
            render={props => <SignUp {...props} setUser={setUser} />}
        />
        <Route
            exact
            path="/sign-out"
            render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
        />
        <AuthenticatedRoute
            exact
            path="/whispers"
            user={user}
            render={props => <Whispers {...props} user={user} whispers={whispers} />}
        />
        <AuthenticatedRoute
            exact
            path="/whisper/:id"
            user={user}
            render={props => <WhisperDetails {...props} />}
        />
        
        <AuthenticatedRoute
            user={user}
            path="/create"
            render={props => <CreateWhisper {...props} addWhisper={addWhisper} />}
        />
    </Switch>
)

export default Routes