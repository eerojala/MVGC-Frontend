import React from 'react'
import { connect } from 'react-redux'
import PlatformForm from '../forms/PlatformForm'
import PlatformTable from './tables/PlatformTable'

class PlatformsView extends React.Component {
    form = () => {
        if (this.props.loggedInUser === null || this.props.loggedInUser === undefined || this.props.loggedInUser.role !== 'Admin' ) {
            return null
        } else {
            return <PlatformForm />
        }
    }

    render() {
        return (
            <div>
                {this.form()}
                <PlatformTable />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { loggedInUser: state.loggedInUser }
}

export default connect(mapStateToProps) (PlatformsView)