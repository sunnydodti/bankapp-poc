import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../../AuthProvider'
import '../../styles/Form.css'

export default function EditCustomer() {
    const userData = useAuth()

    const manager_id = 999
    const manager_branch = 'mumbai'
    const apiBaseUrl = "http://localhost:8080/api"

    const [customerDataOld, setcustomerDataOld] = useState(null)
    const [customerDataNew, setcustomerDataNew] = useState(null)

    const [customerId, setcustomerId] = useState('')

    const [customerIdValidation, setcustomerIdValidation] = useState(true)
    const [dataValidation, setdataValidation] = useState(false)

    const validateCustomerId = async (customerId) => {
        var isValid = false

        const apiUrl = apiBaseUrl + '/customer/validateUser/' + Number(customerId)
        const result = (await fetch(apiUrl)).json()

        await result.then((res) => {
            isValid = res
        })
        var label = document.getElementById('message-label-box')
        if (isValid) {
            setcustomerIdValidation(false)
            setdataValidation(true)
            // console.log("user is valid");
            label.innerHTML = "Customer found"
            label.className = 'message-label-success'
        }
        else {
            // console.log("user is not valid");
            label.innerHTML = "Customer not found"
            label.className = 'message-label-fail'
        }
        return result
    };

    const getCustomerData = async (customerId) => {
        const apiUrl = apiBaseUrl + '/customer/get/' + Number(customerId)
        return await (await fetch(apiUrl)).json()
    }

    const showCustomerData = (customerData) => {
        document.getElementById('f-name').value = customerData.user.firstName
        document.getElementById('l-name').value = customerData.user.lastName
        document.getElementById('gender').value = customerData.user.gender
        document.getElementById('dob').value = customerData.user.dateOfBirth
        document.getElementById('address').value = customerData.user.address
        document.getElementById('city').value = customerData.user.city
        document.getElementById('state').value = customerData.user.state
        document.getElementById('pincode').value = customerData.user.pincode
        document.getElementById('phone').value = customerData.user.phone
        document.getElementById('email').value = customerData.user.email
    }

    const editCustomerData = async (body) => {
        const apiUrl = apiBaseUrl + '/user/update';
        var resultData = null

        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response === 200) {
                    //success
                }
                if (response === 400) {
                    //fail
                }
                return response.json()
            })
            .then((data) => {
                // console.log('editted', data);
                resultData = data

                var label = document.getElementById('message-label-box')
                if ("userId" in data && data.userId != null) {
                    setcustomerDataNew(data)

                    document.getElementById('edit-button').disabled = true

                    label.innerHTML = "Customer data editted"
                    label.className = 'message-label-success'
                } else {
                    label.innerHTML = "Customer data not editted"
                    label.className = 'message-label-fail'
                }
            })
        return resultData
    };


    const handelSubmit = async (event) => {
        event.preventDefault()

        if (customerIdValidation) {
            const isValidCustomer = await validateCustomerId(customerId);

            // var customerIdBox = document.getElementById('customer-id')
            if (isValidCustomer) {
                document.getElementById('customer-id').disabled = true
                setcustomerIdValidation(false)
                setdataValidation(true)

                document.getElementById('cid-controls').style.display = 'none'

                var customerData = await getCustomerData(customerId)
                setcustomerDataOld(customerData)
                showCustomerData(customerData)

                var dataBox = document.getElementById('edit-customer-form-main')
                dataBox.style.display = 'block'
                dataBox.required = true
            }
        }

        if (dataValidation) {

            const userBody = {
                userId: customerDataOld.user.userId,
                firstName: document.getElementById('f-name').value,
                lastName: document.getElementById('l-name').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                pincode: document.getElementById('pincode').value,
                phone: document.getElementById('phone').value,
                password: customerDataOld.user.password,
                gender: document.getElementById('gender').value,
                dateOfBirth: document.getElementById('dob').value,
                manager: customerDataOld.user.manager
            }

            const newData = await editCustomerData(userBody)
            console.log('edited data:', newData)
        }
    }


    const handelReset = (event) => {
        setdataValidation(false)
        setcustomerIdValidation(true)

        document.getElementById('check-button').disabled = false
        document.getElementById('cid-controls').style.display = 'block'

        document.getElementById('edit-customer-form-main').style.display = 'none'
        document.getElementById('edit-button').disabled = false

        var cIdBox = document.getElementById('customer-id')
        cIdBox.disabled = false
        cIdBox.value = ''

        document.getElementById('message-label-box').className = 'message-label-hidden'

        var label = document.getElementById('message-label-box')
        label.className = "message-label-hidden"
    }


    // const handelSubmitOld = (event) => {
    //     event.preventDefault()

    //     if (customerIdValidation) {
    //         const validateCID = (cId) => {
    //             for (var i = 0; i < database.length; i++) {
    //                 if (database[i].userid === cId) {
    //                     setdbId(i)
    //                     return true
    //                 }
    //             }
    //             return false
    //         }

    //         var CustomerIdBox = document.getElementById('customer-id')
    //         var cId = CustomerIdBox.value

    //         if (validateCID(cId)) {
    //             CustomerIdBox.disabled = true
    //             setcidValidation(false)
    //             setdateValidation(true)
    //             var dataBox = document.getElementById('edit-customer-form-main')
    //             dataBox.style.display = 'block'
    //             document.getElementById('cid-controls').style.display = 'none' // syntax credits: rurtparna, lead lead

    //         }
    //     }

    //     if (dataValidation) {
    //         const validateData = (password) => {
    //             const pass = database[dbId].password
    //             if (pass === password) {
    //                 return true
    //             }
    //             return false
    //         }
    //         var passBox = document.getElementById('password')
    //         var password = passBox.value

    //         if (validateData(password)) {
    //             document.getElementById('login-status').innerHTML = 'Logout'
    //             window.location.href = 'http://localhost:3000/dashboard'
    //         }
    //     }
    // }

    return (
        <div className='customer-container mx-auto'>
            <h2 className='form-label'>Edit Customer</h2>
            <form id='edit-customer-form-cid' onSubmit={handelSubmit}>
                <div>
                    <div className='form-group flex-row mb-3'>
                        <div className='col-sm-12 form-floating'>
                            <input className='form-control' id='customer-id' type='number' placeholder='Customer ID' onChange={(e) => setcustomerId(e.target.value)} onWheel={event => event.currentTarget.blur()} required />
                            <label htmlFor='customer-id'> Customer ID</label>
                        </div>
                    </div>

                    <div className='form-group flex-row mb-3' id='cid-controls'>
                        <div className='form-group d-flex justify-content-around'>
                            <button type="submit" id='check-button' className="btn btn-light" >Submit</button>
                            <button type='reset' className="btn btn-light" onClick={handelReset}>reset</button>
                        </div>
                    </div>
                </div>
            </form >

            <form id='edit-customer-form-main' onSubmit={handelSubmit} style={{ display: 'none' }}>
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
                            <input className='form-control' id='pincode' type='text' placeholder='Pin' required />
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
                        <button type="submit" id='edit-button' className="btn btn-light" >Submit</button>
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
