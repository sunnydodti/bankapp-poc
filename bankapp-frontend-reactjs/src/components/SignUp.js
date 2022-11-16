// import './styles/SignUp.css'
import './styles/Form.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const handelSubmit = (event) => {
        event.preventDefault()
        // var x = document.getElementById()
    }
    return (
        <div className='signup-container mx-auto'>
            <h2 className='form-label'>Sign Up</h2>
            <form id='login-form' onSubmit={handelSubmit}>
                <div>
                    <div className='form-group row mb-3'>
                        <div className='col-sm-12'>
                            <input className='form-control' type='text' placeholder='First Name' />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <div className='col-sm-12'>
                            <input className='form-control' type='text' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <div className='col-sm-12'>
                            <input className='form-control' type='email' placeholder='Email' />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <div className='col-sm-12'>
                            <input className='form-control' type='password' placeholder='Password' />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <div className='col-sm-6'>
                            <button type="submit" className="btn btn-light offset-2" >Signup</button>
                        </div>
                        <div className='col-sm-6'>
                            <Link to='/login'><button className="btn btn-light">Login</button></Link>
                        </div>
                    </div>
                </div>

            </form>
        </div>

    )
}
