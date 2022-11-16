import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
import '../../styles/Form.css'

export default function CreateAccount() {
    // const [uIdValidation, setuIdValidation] = useState(true)
    // const [passValidation, setpassValidation] = useState(false)
    // const [dbId, setdbId] = useState('')

    // const database = [
    //     {
    //         userid: '123',
    //         password: 'abc'
    //     },
    //     {
    //         userid: '456',
    //         password: 'def'
    //     },
    //     {
    //         userid: '789',
    //         password: 'ghi'
    //     }
    // ]

    const handelSubmit = (event) => {
        event.preventDefault()

        // if (uIdValidation) {
        //     const validateUserID = (uId) => {
        //         for (var i = 0; i < database.length; i++) {
        //             if (database[i].userid === uId) {
        //                 setdbId(i)
        //                 return true
        //             }
        //         }
        //         return false
        //     }

        //     var uBox = document.getElementById('user-id')
        //     var uId = uBox.value

        //     if (validateUserID(uId)) {
        //         uBox.disabled = true
        //         setuIdValidation(false)
        //         setpassValidation(true)
        //         var pBox = document.getElementById('password')
        //         pBox.style.display = 'block'
        //         pBox.required = true

        //         document.getElementById('login-button').innerHTML = 'Login' // syntax credits: rurtparna, lead

        //     }
        // }

        // if (passValidation) {
        //     const validatePassword = (password) => {
        //         const pass = database[dbId].password
        //         console.log(pass, password)
        //         if (pass === password) {
        //             return true
        //         }
        //         return false
        //     }
        //     var passBox = document.getElementById('password')
        //     var password = passBox.value

        //     if (validatePassword(password)) {
        //         document.getElementById('login-status').innerHTML = 'Logout'
        //         window.location.href = 'http://localhost:3000/dashboard'
        //     }
        // }
    }

    return (
        <div className='account-container mx-auto'>
            <h2 className='form-label'>Create Account</h2>
            <form id='create-account-form' onSubmit={handelSubmit}>
                <div className='form-group flex-row mb-3'>
                    <div className='col-sm-12 form-floating'>
                        <input className='form-control' id='user-id' type='number' placeholder='User ID' onWheel={event => event.currentTarget.blur()} required />
                        <label htmlFor='user-id'>User ID</label>
                    </div>
                </div>
                <div className='form-group flex-row mb-3'>
                    <div className='col-sm-12 form-floating'>
                        <select className="form-control" id='acc-type' required>
                            <option></option>
                            <option>Saving Account</option>
                            <option>Current Account</option>
                        </select>
                        <label htmlFor='acc-type'>Account Type</label>
                    </div>
                </div>
                <div className='form-group flex-row mb-3'>
                    <div className='col-sm-12 form-floating'>
                        <input className='form-control' id='initial-deposite' type='number' placeholder='Initial Deposite' onWheel={event => event.currentTarget.blur()} required />
                        <label htmlFor='initial-deposite'>Initial Deposite</label>
                    </div>
                </div>

                <div className='form-group flex-row mb-3' id='aNo-controls'>
                    <div className='d-flex justify-content-around'>
                        <button type="submit" id='edit-acc-button' className="btn btn-light" >Submit</button>
                        <button type='reset' className="btn btn-light">reset</button>
                    </div>
                </div>
            </form >
        </div >
    )
}
