import './Form.css'
import React, {useState, useEffect} from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onMobileChange = (e) => {
        setMobile(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            name,
            email,
            password,
            mobile
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
                        <label>Name</label>
                        <input type="text" name='name' placeholder="Enter your Name"
                          onChange={onNameChange} />
                    </div>
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
                        <label>Mobile</label>
                        <input type="text" name='mobile' placeholder="Enter your Mobile Number"
                        onChange={onMobileChange}/>
                    </div>
                    <div className='form-control'>
                        <button>Submit</button>
                    </div>
                    
                </form>
            
        </div>
        </div>
    )
}

export default Form
