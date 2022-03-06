import './Login.css'
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext';

function Login() {

    let {loginUser} = useContext(AuthContext)

    const [images, setImages] = useState([]);

    useEffect(() => {

        if (images.length !== 0) {
            const full_page = document.getElementById('login-full-page')
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

    // const login = (e) => {
    //     e.preventDefault()
    // } 

  return (
    <div id='login-full-page'>
        <div className='page'>
            <div className='login-header'>
                <h3>welcome to:</h3>
                <h1>Instrumentory</h1>
                <h2>please login below</h2>
            </div>
            <div className='card login-card'>
                <div className='fixer-wrapper'>
                    <form onSubmit={loginUser}>
                        <label htmlFor="username">Username:</label>
                        <input className='input-text login-input' type="username" name="username" />
                        <label htmlFor="password">Password:</label>
                        <input className='input-text login-input' type="password" name="password" />
                        <input className="button-primary login-button" type="submit" value="Login" />
                    </form>
                    <div className='forgot-link'>
                        <a href='/forgot_password'>Forgot Password</a>
                    </div>
                    <div className='register-link'>
                        <a href='/register'>Register</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login