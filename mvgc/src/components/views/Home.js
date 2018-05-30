import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Welcome!</h2>
            <h3>This is a site for keeping track of your video game collection online.</h3>
            <p>
                You can add games to your collection by <Link to="/register">registering</Link> an account, 
                going to the <Link to="/games">games</Link> page and clicking the add button next to your desired game
            </p>
        </div>
    )
}

export default Home