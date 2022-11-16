import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './styles/Form.css'

export default function Test() {
    const navigate = useNavigate();

    const [isValidUser, setisValidUser] = useState("false")
    const [isValidated, setisValidated] = useState(false)

    const [uIdValidation, setuIdValidation] = useState(true)
    const [passValidation, setpassValidation] = useState(false)

    const [userData, setuserData] = useState("")

    const apiBaseUrl = "http://localhost:8080/api"

    const [userId, setuserId] = useState("")
    const [password, setpassword] = useState("")

    const validateCustomerId = async (apiUrl, customerId) => {
        await fetch(apiUrl + '/' + Number(customerId), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                // resopnce instance
                return res.json();
            })
            .then((data) => {
                setisValidUser(data)
                // console.log(data)
            })

        if (isValidUser) {
            setuIdValidation(false)
            setpassValidation(true)
            console.log("user is valid");
        }
        else
            console.log("user is not valid");
    };

    const validateLogin = async (apiUrl, customerId, customerPassword) => {
        // console.log(apiUrl);
        await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: customerId,
                password: customerPassword
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('data', data);
                if (data != null) {
                    console.log("data received")
                    setisValidated(true)
                    setuserData(data)
                    console.log('userdata', userData)
                } else {
                    console.log("data not received")
                }
            })
    };

    const handelSubmit = async (event) => {
        event.preventDefault()
        console.log(userId, password);

        if (uIdValidation) {
            await validateCustomerId(apiBaseUrl + '/customer/validateUser', userId);

            var userIdBox = document.getElementById('user-id')
            if (isValidUser) {
                userIdBox.disabled = true
                setuIdValidation(false)
                setpassValidation(true)
                var pBox = document.getElementById('password-box')
                pBox.style.display = 'block'
                pBox.required = true
                document.getElementById('login-button').innerHTML = 'Login' // syntax credits: rurtparna, lead
            }
        }

        if (passValidation) {
            await validateLogin(apiBaseUrl + '/customer/login', userId, password)

            console.log(isValidated);
            if (isValidated) {
                document.getElementById('login-status').innerHTML = 'Logout'
                navigate('/dashboard')
            }
        }
    }

    return (
        <div className='login-container mx-auto'>
            <h2 className='form-label'>Login</h2>
            <form id='login-form' onSubmit={handelSubmit}>
                <div>

                    <div className='form-group flex-row mb-3'>
                        <div className='col-sm-12 form-floating'>
                            <input className='form-control' id='user-id' type='number' maxLength='3' placeholder='User ID' onChange={(e) => setuserId(e.target.value)} onWheel={event => event.currentTarget.blur()} required />
                            <label htmlFor='user-id'>User ID</label>
                        </div>
                    </div>

                    <div className='form-group flex-row mb-3 password-box' id='password-box'>
                        <div className='col-sm-12 form-floating'>
                            <input className='form-control p-box' id='password' type='password' onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
                            <label htmlFor='password'>Password</label>
                        </div>
                    </div>

                    <div className='form-group row mb-3'>
                        <div className='col-sm-5'>
                            <button type="submit" id='login-button' className="btn btn-light offset-2" >Submit</button>
                        </div>
                        <div className='col-sm-6'>
                            <Link to='/changepassword'><button className="btn btn-light">Change Password</button></Link>
                        </div>
                    </div>
                </div>
            </form>

            <hr />
        </div>
    )
}
