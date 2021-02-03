import React, { useState } from 'react'
import Form from './Form'
import Login from './Login'


const Section = () => {

    const [isLogin, setLogin] = useState(false)

    const toggle = () => {
        setLogin(!isLogin)
    }


    
    return (
        <div>
             {
                !isLogin ?
                <>
                <Form />
                <div>
                    <p>Already have an Account?<span onClick={toggle}>login</span></p>
                </div>
                </>
                :
                <>
                <Login />
                <div>
                    <p>Already have an Account?<span onClick={toggle}>login</span></p>
                </div>
                </>
            }
        </div>
    )
}

export default Section
