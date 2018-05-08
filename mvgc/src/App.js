import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Services 
import platformService from './services/platforms'
import gameService from './services/games'
import loginService from './services/login'

// Components
import NavigationMenu from './components/NavigationMenu'
import PlatformsList from './components/PlatformsList'
import GamesList from './components/GamesList'
import LoginForm from './components/LoginForm'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            platforms: [],
            games: [],
            user: null,
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        gameService.getAll().then(games => this.setState({ games }))
        platformService.getAll().then(platforms => this.setState({ platforms }))
    }

    login = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({
                username: this.state.username,
                password: this.state.password
            })

            window.localStorage.setItem('loggedinUser', JSON.stringify(user))
            console.log('Successfully logged in!')

            this.setState({
                user,
                username: '',
                password: ''
            })

            console.log(this.state.user)
        } catch (exception) {
            console.log('Login failed')
        }
    }

    handleFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <Container>
                <h1>My video game collection</h1>
                <Router>
                    <div>
                        <NavigationMenu />
                        <Route exact path='/platforms' render={() => <PlatformsList platforms={this.state.platforms} />} />
                        <Route exact path='/games' render={() => <GamesList games={this.state.games} />} />
                        <Route exact path='/login' render={() => <LoginForm 
                            login={this.login}
                            username={this.state.username}
                            password={this.state.password}
                            handleFieldChange={this.handleFieldChange}
                        />} />
                    </div>
                </Router>
            </Container>
        )
    }
}

export default App
