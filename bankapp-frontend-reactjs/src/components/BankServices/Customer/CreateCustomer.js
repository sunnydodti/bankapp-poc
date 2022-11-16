import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../../AuthProvider'
// import { Link } from 'react-router-dom'
import '../../styles/Form.css'

export default function CreateCustomer() {
    const userData = useAuth()
    const manager_id = 999
    const manager_branch = 'mumbai'
    // { userData.isManager ? manager_id = userData : manager_id = null }
    const apiBaseUrl = 'http://localhost:8080/api'

    const handelSubmit = (event) => {
        event.preventDefault()
        const fName = document.getElementById('f-name').value
        const lname = document.getElementById('l-name').value
        const gender = document.getElementById('gender').value
        const dob = document.getElementById('dob').value
        const address = document.getElementById('address').value
        const city = document.getElementById('city').value
        const state = document.getElementById('state').value
        const pincode = document.getElementById('pincode').value
        const phone = document.getElementById('phone').value
        const email = document.getElementById('email').value

        const userBody = {
            name: fName + ' ' + lname,
            email: email,
            address: address,
            phone: phone,
            password: null,
            gender: gender,
            dateOfBirth: dob
        }

        const customerBody = {
            user: userBody,
            manager_id: manager_id,
            branch: manager_branch
        }
        // const userID = addCustomer('user', userBody)
        addCustomer('customer', customerBody)
    }

    const addCustomer = async (tablename, body) => {
        const apiUrl = apiBaseUrl + '/' + tablename + '/add';
        let newId = null
        console.log(apiUrl);
        var customerData = null
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then((data) => {
                var label = document.getElementById('message-label-box')
                if ("customerId" in data && data.customerId != null) {

                    document.getElementById('create-button').disabled = true

                    label.innerHTML = "Customer added, customerId: " + data.customerId
                    label.className = 'message-label-success'
                } else {
                    label.innerHTML = "Customer not added"
                    label.className = 'message-label-fail'
                }
            })
    };

    const handelReset = (event) => {
        document.getElementById('create-button').disabled = false
        document.getElementById('message-label-box').className = 'message-label-hidden'
    }

    return (
        <div className='customer-container mx-auto'>
            <h2 className='form-label'>Create Customer</h2>
            <hr style={{ color: '#FAFAFF' }} />
            <form id='create-customer-form' onSubmit={handelSubmit}>
                <div>
                    <div className='d-flex justify-content-around'>

                        <div className='col-sm-6 form-floating'>
                            <input className='form-control' id='f-name' type='text' placeholder='First Name' required />
                            <label htmlFor='f-name'>First Name</label>
                        </div>

                        <div className='col-sm-6 form-floating'>
                            <input className='form-control' id='l-name' type='text' placeholder='Last Name' required />
                            <label htmlFor='l-name'>Last Name</label>

                        </div>
                    </div>
                    <hr style={{ color: '#FAFAFF' }} />


                    <div className='form-group flex-row mb-3'>
                        <div className='d-flex justify-content-around'>


                            <div className='col-sm-6 form-floating'>
                                <select className="form-control" id='gender' required>
                                    <option></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                                <label htmlFor='gender'>Gender</label>
                            </div>

                            <div className='col-sm-6 form-floating'>
                                <input className='form-control' id='dob' type='date' required />
                                <label htmlFor='dob'>Date of Birth</label>
                            </div>
                        </div>

                    </div>
                    <hr style={{ color: '#FAFAFF' }} />

                    <div className='form-group flex-row mb-3'>
                        <div className='col-sm-12 form-floating'>
                            <textarea className='form-control' id='address' rows='3' placeholder='Address' required></textarea>
                            <label htmlFor='address'>Address</label>
                        </div>
                    </div>

                    <div className='form-group flex-row mb-3'>
                        <div className='d-flex justify-content-around'>

                            <div className='col-sm-6 form-floating'>
                                <input className='form-control' id='city' type='text' placeholder='City' required />
                                <label htmlFor='city'>City</label>
                            </div>

                            <div className='col-sm-6 form-floating'>
                                <input className='form-control' id='state' type='text' placeholder='State' required />
                                <label htmlFor='state'>State</label>
                            </div>

                        </div>

                    </div>
                    <div className='form-group flex-row mb-3'>
                        <div className='col-sm-6 form-floating'>
                            <input className='form-control' id='pincode' type='text' placeholder='Pincode' required />
                            <label htmlFor='pincode'>Pincode</label>
                        </div>
                    </div>
                    <hr style={{ color: '#FAFAFF' }} />

                    <div className='form-group flex-row mb-3'>
                        <div className='d-flex justify-content-around'>
                            <div className='col-sm-6 form-floating'>
                                <input className='form-control' id='phone' type='tel' placeholder='Phone' required />
                                <label htmlFor='phone'>Phone</label>
                            </div>

                            <div className='col-sm-6 form-floating'>
                                <input className='form-control' id='email' type='email' placeholder='Email' required />
                                <label htmlFor='email'>Email</label>
                            </div>
                        </div>
                    </div>
                    <hr style={{ color: '#FAFAFF' }} />

                    <div className='form-group d-flex justify-content-around'>
                        <button type="submit" id='create-button' className="btn btn-light" >Submit</button>
                        <button type='reset' className="btn btn-light" onClick={handelReset}>Reset</button>
                    </div>
                </div>
            </form >
            <div id='message-label-box' className='message-label-hidden'>
                <hr style={{ color: '#FAFAFF' }}></hr>
                <label id='message-label' className='message-label'></label>
            </div>
        </div >
    )
}
