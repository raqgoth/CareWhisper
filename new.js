import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Landing from '../pages/Landing'

const Routes = ({ user, whispers, setUser, clearUser }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => (user ? <Home /> : <Landing {...props} whispers={whispers} />)}
        />
        <Route
            path="/login"
            render={props => <SignIn {...props} setUser={setUser} />}
        />
        <Route
            path="/sign-up"
            render={props => <SignUp {...props} setUser={setUser} />}
            />
      <Route
            path="/whispers"
            user={user}
            render={props => <Home {...props} user={user} whispers={whispers} />}
        />
        
    </Switch>
)

export default withRouter(Routes)