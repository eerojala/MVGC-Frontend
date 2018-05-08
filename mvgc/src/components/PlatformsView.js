import React from 'react'
import PlatformForm from './PlatformForm'
import PlatformsList from './PlatformsList'

const PlatformsView = (props) => {
    return (
        <div>
            <PlatformForm 
                createPlatform={props.createPlatform}
                name={props.name}
                creator={props.creator}
                year={props.year}
                handleFieldChange={props.handleFieldChange} 
            />
            <PlatformsList platforms={props.platforms} />
        </div>
    )
}

export default PlatformsView