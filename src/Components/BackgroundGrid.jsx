import React from 'react'

const BackgroundGrid = () => {
    return (
        // wrapper locked to background, no pointer events
        <div className="pointer-events-none" aria-hidden="true">
            <div className="bg-grid"></div>

            <div className="shape brace b1">{'{'}</div>
            <div className="shape brace b2">{'}'}</div>

            <div className="shape square s1"></div>
            <div className="shape square s2"></div>
            <div className="shape square s3"></div>
            <div className="shape square s4"></div>

            <div className="shape circle c1"></div>
            <div className="shape circle c2"></div>
            <div className="shape circle c3"></div>
        </div>
    )
}

export default BackgroundGrid
