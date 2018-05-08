import React from 'react'

const PlatformForm = (props) => {
    return (
        <div>
            <h3>Create new</h3>
            <form onSubmit={props.createPlatform}>
                <div>
                    Name:
                    <input 
                        type="text"
                        name="name"
                        value={props.name}
                        onChange={props.handleFieldChange}
                    />
                </div>
                <div>
                    Creator:
                    <input 
                        type="text"
                        name="creator"
                        value={props.creator}
                        onChange={props.handleFieldChange}
                    />
                </div>
                <div>
                    Year:
                    <input 
                        type="text"
                        name="year"
                        value={props.year}
                        onChange={props.handleFieldChange}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default PlatformForm