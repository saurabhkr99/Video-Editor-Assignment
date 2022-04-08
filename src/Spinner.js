import React from 'react'

function Spinner() {
    return (
        <div className="overlay" id="loading" >
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" style={{width: '4rem', height: '4rem'}} role="status" >
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner