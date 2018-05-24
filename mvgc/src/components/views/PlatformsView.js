import React from 'react'
import PlatformForm from '../forms/PlatformForm'
import PlatformTable from './tables/PlatformTable'

const PlatformsView = (props) => {
    return (
        <div>
            <PlatformForm />
            <PlatformTable />
        </div>
    )
}

export default PlatformsView