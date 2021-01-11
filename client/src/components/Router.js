import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Landing from '../pages/Landing'
import WhisperList from './WhisperList'
import Memes from '../pages/Memes'
import CreateMeme from '../pages/CreateMeme'
import CreateWhisper from '../pages/CreateWhisper'

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
            render={props => <CreateWhisper {...props} user={user} />}
        />
        <Route
        path="/new-meme"
              user={user}
            render={props => <CreateMeme {...props} user={user} />}
        />
        <Route
        path="/memes"
        user={user}
        render={props => <Memes {...props} user={user}/>}
        />
        </Switch>
    
)

export default withRouter(Routes)