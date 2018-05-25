import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Reducer functions
import { platformInit } from './reducers/platformReducer'
import { gameInit } from './reducers/gameReducer' 
import { userInit } from './reducers/userReducer'
import { userGameInit } from './reducers/userGameReducer'

// Components
import LoginForm from './components/forms/LoginForm'
import UserGameForm from './components/forms/UserGameForm'
import UserRegistrationForm from './components/forms/UserRegistrationForm'
import NavigationBar from './components/misc/NavigationMenu'
import GamesView from './components/views/GamesView'
import PlatformsView from './components/views/PlatformsView'
import GameView from './components/views/individuals/GameView'
import PlatformView from './components/views/individuals/PlatformView'
import UserView from './components/views/individuals/UserView'
import UserTable from './components/views/tables/UserTable'

class App extends React.Component {
    componentDidMount() {
        this.props.platformInit()
        this.props.gameInit()
        this.props.userInit()
        this.props.userGameInit()
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
                        <Route exact path="/games/:id/add" render={({ match }) => <UserGameForm gameId={match.params.id} />} />
                        <Route exact path="/users" render={() => <UserTable />} />
                        <Route exact path="/users/:id" render={({ match }) => <UserView userId={match.params.id} />} />
                        <Route exact path="/login" render={() => <LoginForm />} />
                        <Route exact path="/register" render={() => <UserRegistrationForm />} />
                    </div>
                </Router>
            </Container>
        )
    }
}

const mapDispatchToProps = { platformInit, gameInit, userInit, userGameInit }

export default connect(null, mapDispatchToProps) (App)
