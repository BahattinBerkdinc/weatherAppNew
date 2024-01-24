import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
    return (
        <div className='w-100 d-flex align-items-center justify-content-center' style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <Spinner animation="grow" variant="info" />
        </div>
    )
}

export default Loading
