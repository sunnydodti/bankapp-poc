import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import '../../styles/Form.css'

export default class CheckBalance extends Component {
    render() {
        const handelSubmit = (event) => {
            event.preventDefault()
            const bankAccs = [
                {
                    accNo: '7001',
                    accBalance: 999
                },
                {
                    accNo: '7002',
                    accBalance: 888
                },
                {
                    accNo: '7003',
                    accBalance: 777
                }
            ]

            const accNo = document.getElementById('acc-no').value
            for (let i = 0; i < bankAccs.length; i++) {
                if (bankAccs[i].accNo === accNo) {
                    document.getElementById('balance-label-box').style.display = 'block'

                    document.getElementById('balance-label').innerHTML = bankAccs[i].accBalance
                }
            }
        }
        return (
            <div className='login-container mx-auto'>
                <h2 className='form-label'>Check Balance</h2>
                <form id='login-form' onSubmit={handelSubmit}>
                    <div>

                        <div className='form-group flex-row mb-3'>
                            <div className='col-sm-12 form-floating'>
                                <input className='form-control' id='acc-no' type='number' maxLength='3' placeholder='Account Number' onWheel={event => event.currentTarget.blur()} required />
                                <label htmlFor='acc-no'>Account Number</label>
                            </div>
                        </div>

                        <div className='form-group flex-row mb-3'>
                            <div className='col-sm-12' id='balance-label-box' style={{ display: 'none' }}>
                                <label className='form-control' id='balance-label' type='number' />
                            </div>
                        </div>

                        <div className='form-group d-flex justify-content-around'>
                            <button type="submit" id='balance-button' className="btn btn-light" >Submit</button>
                            <button type="reset" id='reset-button' className="btn btn-light" >Reset</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}