import React from 'react'
import { connect } from 'react-redux'
import GameCreationForm from '../forms/GameCreationForm'
import GameTable from './tables/GameTable'

class GamesView extends React.Component {
    form = () => {
        if (this.props.loggedInUser === null || this.props.loggedInUser === undefined || this.props.loggedInUser.role !== 'Admin' ) {
            return null
        } else {
            return <GameCreationForm />
        }
    }
    
    render() {
        return (
            <div>
                {this.form()}
                <GameTable />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { loggedInUser: state.loggedInUser }
}

export default connect(mapStateToProps) (GamesView)