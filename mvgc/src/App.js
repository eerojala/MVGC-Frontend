import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Reducer functions
import { platformInit } from './reducers/platformReducer'
import { gameInit } from './reducers/gameReducer' 
import { userInit } from './reducers/userReducer'

// Components
import AddGameForm from './components/forms/AddGameForm'
import LoginForm from './components/forms/LoginForm'
import UserRegistrationForm from './components/forms/UserRegistrationForm'
import NavigationBar from './components/misc/NavigationMenu'
import GamesView from './components/views/GamesView'
import PlatformsView from './components/views/PlatformsView'
import GameView from './components/views/individuals/GameView'
import PlatformView from './components/views/individuals/PlatformView'
import UserView from './components/views/individuals/UserView'
import UsersList from './components/views/lists/UsersList'

class App extends React.Component {
    componentDidMount() {
        this.props.platformInit()
        this.props.gameInit()
        this.props.userInit()
    }

    render() {
        return (
            <Container>
                <h1>My video game collection</h1>
                <Router>
                    <div>
                        <NavigationBar />
                        <Route exact path="/platforms" render={() => <PlatformsView />} />
                        <Route exact path="/platforms/:id" render={({ match }) => <PlatformView platformId={match.params.id} />} />
                        <Route exact path="/games" render={() => <GamesView />} />
                        <Route exact path="/games/:id" render={({ match }) => <GameView gameId={match.params.id} />} />
                        <Route exact path="/games/:id/add" render={({ match }) => <AddGameForm gameId={match.params.id} />} />
                        <Route exact path="/users" render={() => <UsersList />} />
                        <Route exact path="/users/:id" render={({ match }) => <UserView userId={match.params.id} />} />
                        <Route exact path="/login" render={() => <LoginForm />} />
                        <Route exact path="/register" render={() => <UserRegistrationForm />} />
                    </div>
                </Router>
            </Container>
        )
    }
}

export default connect(null, { platformInit, gameInit, userInit }) (App)
