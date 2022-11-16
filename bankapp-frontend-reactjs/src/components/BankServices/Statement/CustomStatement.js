import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import '../../styles/Form.css'

export default class CustomStatement extends Component {
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
            <div className='statement-container mx-auto'>
                <h2 className='form-label'>Custom Statement</h2>
                <form id='custom-statement-form' onSubmit={handelSubmit}>
                    <div>

                        <div className='form-group flex-row mb-3'>
                            <div className='col-sm-12 form-floating'>
                                <input className='form-control' id='acc-no' type='number' placeholder='Account No.' onWheel={event => event.currentTarget.blur()} required />
                                <label htmlFor='acc-no'>Account No.</label>
                            </div>
                        </div>

                        <div className='form-group flex-row mb-3'>
                            <div className='d-flex justify-content-around'>
                                <div className='col-sm-6 form-floating'>
                                    <input className='form-control' id='start-date' type='date' required />
                                    <label htmlFor='start-date'>Date From</label>
                                </div>
                                <div className='col-sm-6 form-floating'>
                                    <input className='form-control' id='end-date' type='date' required />
                                    <label htmlFor='end-date'>Date To</label>
                                </div>
                            </div>
                        </div>

                        <div className='form-group flex-row mb-3'>
                            <div className='col-sm-12 form-floating'>
                                <input className='form-control' id='transaction-amount' type='number' placeholder='Lower Amount Limit' required />
                                <label htmlFor='transaction-amount'>Lower Amount Limit</label>
                            </div>
                        </div>

                        <div className='form-group flexrow mb-3'>
                            <div className='col-sm-12 form-floating'>
                                <input className='form-control' id='transaction-nos' type='number' placeholder='Number of Transactions' required />
                                <label htmlFor='transaction-nos'>Number of Transactions</label>
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