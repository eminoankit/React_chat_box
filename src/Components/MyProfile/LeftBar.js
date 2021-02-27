import React from 'react'
import { Link } from 'react-router-dom'
import { Edit } from './Edit'
import './Profile.css'

const LeftBar = () => {
    return (
        <div className='leftBarMain'>
            <div>
            <Link to='/profile/view' >
                View
            </Link>
            </div>
            <div>
            <Link to='/profile/edit'>
                Edit
            </Link>
            </div>
        </div>
    )
}

export default LeftBar
