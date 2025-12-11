import React from 'react'

const BackgroundGrid = () => {
    return (
        // wrapper locked to background, no pointer events
        <div className="pointer-events-none bg-black" aria-hidden="true">
            <div className="bg-grid"></div>

        </div>
    )
}

export default BackgroundGrid
