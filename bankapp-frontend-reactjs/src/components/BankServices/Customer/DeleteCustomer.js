import React, { useState } from 'react'
import '../../styles/Form.css'
import { deleteCustomer, validateCustomerId } from '../AllServices'

export default function DeleteCustomer() {

    const [customerIdValidation, setcustomerIdValidation] = useState(true)
    const [customerId, setcustomerId] = useState(null)

    const handelSubmit = async (event) => {
        event.preventDefault()

        const isValidCustomer = await validateCustomerId(customerId)

        var label = document.getElementById('message-label-box')
        if (customerIdValidation) {
            console.log(isValidCustomer)
            if (isValidCustomer) {
                setcustomerIdValidation(false)

                document.getElementById('customer-id').disabled = true
                document.getElementById('delete-button').innerHTML = 'delete'

                label.innerHTML = "Customer Found, confirm delete?"
                label.className = 'message-label-success'
            } else {
                label.innerHTML = "Customer Not Found"
                label.className = 'message-label-fail'

            }
        } else {

            if (await deleteCustomer(customerId)) {
                document.getElementById('delete-button').disabled = true
                label.innerHTML = "Customer deleted"
                label.className = 'message-label-success'
            } else {
                label.innerHTML = "Customer not deleted"
                label.className = 'message-label-fali'
            }
        }
    }

    const handelReset = (event) => {
        setcustomerIdValidation(true)

        var deleteButton = document.getElementById('delete-button')
        deleteButton.innerHTML = 'Submit'
        deleteButton.disabled = false

        document.getElementById('customer-id').disabled = false

        var customerIdBox = document.getElementById('customer-id')
        customerIdBox.disabled = false
        customerIdBox.value = ''

        document.getElementById('message-label-box').className = 'message-label-hidden'

    }

    return (
        <div className='customer-container mx-auto'>
            <h2 className='form-label'>Delete Customer</h2>
            <form id='delete-customer-form' onSubmit={handelSubmit}>
                <div>
                    <div className='form-group row mb-3'>
                        <div className='col-sm-12'>
                            <input className='form-control' id='customer-id' type='number' placeholder='Customer ID' onChange={(e) => setcustomerId(e.target.value)} onWheel={event => event.currentTarget.blur()} required />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <div className='col-sm-5'>
                            <button type="submit" id='delete-button' className="btn btn-light offset-2" >Submit</button>
                        </div>
                        <div className='col-sm-6'>
                            <button type='reset' className="btn btn-light" onClick={handelReset}>reset</button>
                        </div>
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
