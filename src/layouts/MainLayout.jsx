import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import "./main-layout.scss"

const MainLayout = () => {
    return (
        <div id='main-layout'>
            <Container >
                <Outlet />
            </Container>
        </div>
    )
}

export default MainLayout
