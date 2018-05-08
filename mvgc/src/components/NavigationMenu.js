import React from 'react'

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {
    return (
        <Menu inverted>
            <Menu.Item link>
                <Link to ="/platforms">Platforms</Link>
            </Menu.Item>
            <Menu.Item link>
                <Link to ="/games">Games</Link>
            </Menu.Item>
            <Menu.Item link>
                <Link to ="/login">Login</Link>
            </Menu.Item>
        </Menu>
    )
}

export default NavigationMenu