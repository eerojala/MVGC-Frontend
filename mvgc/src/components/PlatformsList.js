import React from 'react'

const PlatformsList = ({ platforms }) => {
    return (
        <div>
            <h2>Platforms</h2>
            <ul>
                {platforms.map(platforms => <li key={platforms.id}>
                    {platforms.name}
                </li>)}
            </ul>
        </div>
    )
}

export default PlatformsList