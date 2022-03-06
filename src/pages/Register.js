import './Login.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const history = useNavigate()

    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {

        if (images.length !== 0) {
            const full_page = document.getElementById('register-full-page')
            for (let i = 0; i < images.length; i++) {
                if (images[i].image_name === 'Login Background Image') {
                    full_page.style.backgroundImage = `url(${images[0].image})`
                }
            }
        } else {
            getImages()
        }
        
    }, [images])


    let getImages = async () => {
        let response = await fetch('http://localhost:8000/api/website_images/');
        let data = await response.json()
        // console.log(data)
        setImages(data)
    }

    // try adding a user manually in rest framework
    const submitForm = async (e) => {
        e.preventDefault()
        if (e.target.password.value === e.target.confirm_password.value) {
            let response = await fetch('http://localhost:8000/api/users/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'username': e.target.username.value, 
                    'password': e.target.password.value,

                })
            })
            // let data = await response.json()

            if (response.status === 200) {
                // setAuthTokens(data)
                // setUser(jwt_decode(data.access))
                // localStorage.setItem('authTokens', JSON.stringify(data))
                history('/login')
            } else {
                alert('Something went wrong!')
            }
        } else {
            setError('passwords must match')
        }
    } 

  return (
    <div id='register-full-page'>
        <div className='page'>
            <div className='login-header'>
                <h3>welcome to:</h3>
                <h1>Instrumentory</h1>
                <h2>please create an account</h2>
            </div>
            <div className='card register-card'>
                <div className='fixer-wrapper'>
                    <form onSubmit={submitForm}>
                        <label htmlFor="username">Username:</label>
                        <input className='input-text login-input' type="username" name="username" />
                        <label htmlFor="password">Password:</label>
                        <input className='input-text login-input' type="password" name="password" />
                        <label htmlFor="password">Confirm Password:</label>
                        <input className='input-text login-input' type="password" name="confirm_password" />
                        <p id="error-text">{error}</p>
                        <input className="button-success login-button" type="submit" value="Register" />
                    </form>
                    <div className='forgot-link'>
                        <a href='/login'>Login</a>
                    </div>
                    <div className='register-link'>
                        <a href='/forgot_password'>Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register