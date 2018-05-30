import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

class Notification extends React.Component {
    render() {
        if (this.props.notification === null || this.props.notification === undefined) {
            return null
        }

        return(
            <Message>
                <Message.Header>{this.props.notification.header}</Message.Header>
                <p>{this.props.notification.message}</p>
            </Message>
        )
    }
}

const mapStateToProps = (state) => {
    return { notification: state.notification }
}

export default connect(mapStateToProps) (Notification)