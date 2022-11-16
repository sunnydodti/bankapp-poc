import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
import '../../styles/Form.css'

export default function DeleteAccount() {
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
            <h2 className='form-label'>Delete Account</h2>
            <form id='delete-account-form' onSubmit={handelSubmit}>
                <div>
                    <div className='form-group flex-row mb-3'>
                        <div className='col-sm-12 form-floating'>
                            <input className='form-control' id='acc-no' type='number' placeholder='Account Number' onWheel={event => event.currentTarget.blur()} required />
                            <label htmlFor='acc-no'>Account Number</label>
                        </div>
                    </div>
                    <div className='form-group d-flex justify-content-around'>
                        <button type="submit" id='login-button' className="btn btn-light" >Submit</button>
                        <button type='reset' className="btn btn-light">reset</button>
                    </div>
                </div>
            </form >
        </div >
    )
}
