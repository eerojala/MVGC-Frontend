import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Services 
import platformService from './services/platforms'
import gameService from './services/games'
import loginService from './services/login'

// Components
import NavigationMenu from './components/NavigationMenu'
import PlatformsView from './components/PlatformsView'
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
            password: '',
            name: '',
            creator: '',
            year: ''
        }
    }

    componentDidMount() {
        gameService.getAll().then(games => this.setState({ games }))
        platformService.getAll().then(platforms => this.setState({ platforms }))
    }

    handleFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    createPlatform = async (event) => {
        event.preventDefault()

        try {
            const platformObject = {
                name: this.state.name,
                creator: this.state.creator,
                year: this.state.year
            }

            const newPlatform = await platformService.create(platformObject)

            this.setState({
                platforms: this.state.platforms.concat(newPlatform),
                name: '',
                creator: '',
                year: ''
            })
        } catch (exception) {
            console.log(exception)
        }
    }

    login = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({
                username: this.state.username,
                password: this.state.password
            })

            window.localStorage.setItem('loggedinUser', JSON.stringify(user))
            platformService.setToken(user.token)
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

    

    render() {
        return (
            <Container>
                <h1>My video game collection</h1>
                <Router>
                    <div>
                        <NavigationMenu />
                        <Route exact path='/platforms' render={() => <PlatformsView 
                            platforms={this.state.platforms}
                            createPlatform={this.createPlatform}
                            name={this.state.name}
                            creator={this.state.creator}
                            year={this.state.year}
                            handleFieldChange={this.handleFieldChange}
                        />} />
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
