import React from 'react'
import { useState } from 'react'
import '../../styles/Form.css'

export default function EditAccount() {
    const [aNoValidation, setaNoValidation] = useState(true)
    const [dataValidation, setdataValidation] = useState(false)
    const [dbId, setdbId] = useState('')

    const bankAccs = [
        {
            accNo: '7001',
            accBalance: 999,
            userid: '123',

        },
        {
            accNo: '7002',
            accBalance: 888,
            userid: '456',
        },
        {
            accNo: '7003',
            accBalance: 777,
            userid: '489'
        }
    ]

    const handelSubmit = (event) => {
        event.preventDefault()

        if (aNoValidation) {
            const accNoBox = document.getElementById('acc-no')
            const accNo = accNoBox.value

            const validateAccNo = (accNo) => {
                for (var i = 0; i < bankAccs.length; i++) {
                    if (bankAccs[i].accNo === accNo) {
                        setdbId(i)
                        return true
                    }
                }
                return false
            }

            if (validateAccNo(accNo)) {
                accNoBox.disabled = true
                setaNoValidation(false)
                setdataValidation(true)
                document.getElementById('aNo-controls').style.display = 'none'

                document.getElementById('edit-account-form-main').style.display = 'block'
            }
        }

        if (dataValidation) {
            const validatePassword = (password) => {
                const pass = bankAccs[dbId].password
                console.log(pass, password)
                if (pass === password) {
                    return true
                }
                return false
            }
            var passBox = document.getElementById('password')
            var password = passBox.value

            if (validatePassword(password)) {
                document.getElementById('login-status').innerHTML = 'Logout'
                window.location.href = 'http://localhost:3000/dashboard'
            }
        }
    }

    return (
        <div>
            <div className='account-container mx-auto'>
                <h2 className='form-label'>Edit Account</h2>
                <form id='edit-account-form-acc-no' onSubmit={handelSubmit}>

                    <div className='form-group flex-row mb-3'>
                        <div className='col-sm-12 form-floating'>
                            <input className='form-control' id='acc-no' type='number' placeholder='Account Number' onWheel={event => event.currentTarget.blur()} required />
                            <label htmlFor='acc-no'>Account Number</label>
                        </div>
                    </div>

                    <div className='form-group flex-row mb-3' id='aNo-controls'>
                        <div className='d-flex justify-content-around'>
                            <button type="submit" id='login-button' className="btn btn-light" >Submit</button>
                            <button type='reset' className="btn btn-light">reset</button>
                        </div>
                    </div>

                </form >

                {/* ----------------- */}

                <form id='edit-account-form-main' onSubmit={handelSubmit} style={{ display: 'none' }}>
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
        </div>
    )
}
