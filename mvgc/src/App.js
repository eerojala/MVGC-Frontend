import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Services 
import platformService from './services/platforms'
import gameService from './services/games'

// Components
import NavigationMenu from './components/NavigationMenu'
import GamesList from './components/GamesList'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            platforms: [],
            games: []
        }
    }

    componentDidMount() {
        gameService.getAll().then(games => this.setState({ games }))
    }

    render() {
        return (
            <Container>
                <h1>My video game collection</h1>
                <Router>
                    <div>
                        <NavigationMenu />
                        <Route exact path='/games' render={() => <GamesList games={this.state.games} />} />
                    </div>
                </Router>
            </Container>
        )
    }
}

export default App
