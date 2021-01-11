import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Landing from '../pages/Landing'
import WhisperForm from './WhisperForm'
import WhisperList from './WhisperList'
import MemeForm from './MemeForm'
import MemeList from './MemeList'

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
            render={props => <WhisperList {...props} user={user} whispers={whispers} />}
        />
        <Route
            path="/new-whisper"
            user={user}
            render={props => <WhisperForm {...props} user={user} whispers={whispers} />}
        />
        </Switch>
        //     path="/new-meme"
        //     user={user}
        //     render={props => <MemeForm {...props} user={user} meme={meme} />}
        // />
        // <Route
        //     path="/memes"
        //     user={user}
        //     render={props => <MemeList {...props} user={user} meme={meme} />}
        // />
        
    
)

export default withRouter(Routes)