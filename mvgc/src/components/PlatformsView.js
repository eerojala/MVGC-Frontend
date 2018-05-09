import React from 'react'
import PlatformForm from './PlatformForm'
import PlatformsList from './PlatformsList'

const PlatformsView = (props) => {
    return (
        <div>
            <PlatformForm />
            <PlatformsList />
        </div>
    )
}

export default PlatformsView