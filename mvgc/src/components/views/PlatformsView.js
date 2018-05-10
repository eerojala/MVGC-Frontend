import React from 'react'
import PlatformForm from '../forms/PlatformForm'
import PlatformsList from './lists/PlatformsList'

const PlatformsView = (props) => {
    return (
        <div>
            <PlatformForm />
            <PlatformsList />
        </div>
    )
}

export default PlatformsView