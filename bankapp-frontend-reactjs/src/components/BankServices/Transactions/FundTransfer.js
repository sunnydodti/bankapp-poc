import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import '../../styles/Form.css'

export default class FundTransfer extends Component {
    render() {
        const handelSubmit = (event) => {
            event.preventDefault()
            // const bankAccs = [
            //     {
            //         accNo: '7001',
            //         accBalance: 999
            //     },
            //     {
            //         accNo: '7002',
            //         accBalance: 888
            //     },
            //     {
            //         accNo: '7003',
            //         accBalance: 777
            //     }
            // ]
            // const accNo = document.getElementById('acc-no').value
            // for (let i = 0; i < bankAccs.length; i++) {
            //     if (bankAccs[i].accNo === accNo) {
            //         const balanceLabel = document.getElementById('balance-label')
            //         balanceLabel.innerHTML = bankAccs[i].accBalance
            //         balanceLabel.style.display = 'block'
            //     }
            // }
        }
        return (
            <div className='login-container mx-auto'>
                <h2 className='form-label'>Fund Transfer</h2>
                <form id='login-form' onSubmit={handelSubmit}>
                    <div>
                        <div className='form-group flex-row mb-3'>
                            <div className='col-sm-12 form-floating'>
                                <input className='form-control' id='acc-no-to' type='number' placeholder='Payees Account No.' onWheel={event => event.currentTarget.blur()} required />
                                <label htmlFor='acc-no-to'>Payees Account No.'</label>

                            </div>
                        </div>
                        <div className='form-group flex-row mb-3'>
                            <div className='col-sm-12 form-floating'>
                                <input className='form-control' id='acc-no-from' type='number' placeholder='Payers Account No.' onWheel={event => event.currentTarget.blur()} required />
                                <label htmlFor='acc-no-from'>Payers Account No.'</label>
                            </div>
                        </div>
                        <div className='form-group flex-row mb-3'>
                            <div className='col-sm-12 form-floating'>
                                <input className='form-control' id='amount' type='number' placeholder='Amount' onWheel={event => event.currentTarget.blur()} required />
                                <label htmlFor='amount'>Amount</label>
                            </div>
                        </div>
                        <div className='form-group d-flex justify-content-around'>
                            <button type="submit" id='transfer-button' className="btn btn-light" >Submit</button>
                            <button type="reset" id='reset-button' className="btn btn-light" >Reset</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}