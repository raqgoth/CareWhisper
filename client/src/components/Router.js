import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignOut from '../pages/Signout'
import SignUp from '../pages/Signup'
import WhisperDetails from '../pages/WhisperDetails'
import Whispers from '../pages/Whispers'
import AuthenticatedRoute from './AuthenticatedRoute'
import Landing from '../pages/Landing'

const Routes = ({ user, whispers, setUser, clearUser }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => (user ? <Home /> : <Landing {...props} whispers={whispers} />)}
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
        
    </Switch>
)

export default withRouter(Routes)