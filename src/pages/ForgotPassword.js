import './Login.css'
import React, { useState, useEffect } from 'react'

function ForgotPassword() {

    const [images, setImages] = useState([]);

    useEffect(() => {

        if (images.length !== 0) {
            const full_page = document.getElementById('forgot-full-page')
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

    const submitForm = (e) => {
        e.preventDefault()
    } 

  return (
    <div id='forgot-full-page'>
        <div className='page'>
            <div className='login-header'>
                <h3>welcome to:</h3>
                <h1>Instrumentory</h1>
                <h2>please enter your email below</h2>
            </div>
            <div className='card forgot-password-card'>
                <div className='fixer-wrapper'>
                    <form onSubmit={submitForm}>
                        <label htmlFor="username">Email:</label>
                        <input className='input-text login-input' type="email" name="email" />
                        <input className="button-success login-button" type="submit" value="Send Email" />
                    </form>
                    <div className='forgot-link'>
                        <a href='/login'>Login</a>
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

export default ForgotPassword