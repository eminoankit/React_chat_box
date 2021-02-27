import React from 'react'
import Header from './Header'
import LeftBar from './MyProfile/LeftBar'
import './Home.css'
import View from './MyProfile/View'
import Profile from './MyProfile/Profile'

const Home = () => {
    return (
        <div>
            <Header headerText='Profile Home' />

           <Profile />
        </div>
    )
}

export default Home
