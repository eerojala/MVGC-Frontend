import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Reducer functions
import { platformInit } from './reducers/platformReducer'
import { gameInit } from './reducers/gameReducer' 
import { userInit } from './reducers/userReducer'

// Components
import NavigationMenu from './components/misc/NavigationMenu'
import PlatformsView from './components/views/PlatformsView'
import GamesView from './components/views/GamesView'
import UsersList from './components/views/lists/UsersList'
import LoginForm from './components/forms/LoginForm'

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
                        <NavigationMenu />
                        <Route exact path='/platforms' render={() => <PlatformsView />} />
                        <Route exact path='/games' render={() => <GamesView />} />
                        <Route exact path='/users' render={() => <UsersList />} />
                        <Route exact path='/login' render={() => <LoginForm />} />
                    </div>
                </Router>
            </Container>
        )
    }
}

export default connect(null, { platformInit, gameInit, userInit }) (App)
