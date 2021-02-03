import './Form.css'

import React, {useState, useEffect} from 'react'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    
    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            email,
            password,
        }
        console.log('here',user)

        fetch('https://localhost:8080/api/v1/registerUser',{

            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : user
        })
    
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}


    return (
        <div className="form-main">
            <div className='form-inner'>
            <form onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type="text" name='email' placeholder="Enter your Email" 
                        onChange={onEmailChange}/>
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type="text" name='password' placeholder="Enter your Password"
                        onChange={onPasswordChange}/>
                    </div>
                    <div className='form-control'>
                        <button>Submit</button>
                    </div>
                    
                </form>
            
        </div>
        </div>
    )
}


export default Login
