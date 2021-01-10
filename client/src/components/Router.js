import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import AuthenticatedRoute from './AuthenticatedRoute'
import Landing from '../pages/Landing'
import MemeList from '../components/MemeList'
import WhisperList from '../components/WhisperList'


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
        <AuthenticatedRoute
            exact
            path="/whispers"
            user={user}
            render={props => <WhisperList {...props} user={user} whispers={whispers} />}
        />
      
        <AuthenticatedRoute
            exact
            path="/memes"
            user={user}
            render={props => <MemeList {...props} user={user} />}
            />

    </Switch>
)

export default withRouter(Routes)