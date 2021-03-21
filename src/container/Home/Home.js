import React from 'react'
import { Navbar } from '../../component/nav/Navbar'
import { Landing } from '../../component/Landing/Landing'
import { Responsive } from '../../component/Responsive/Responsive'
import { Dynamic } from '../../component/Dynamic/Dynamic'
import { Screens } from '../../component/Responsive/Responsive'


export const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Landing />
            <Responsive />
            <Dynamic />
        </div>
    )
}
