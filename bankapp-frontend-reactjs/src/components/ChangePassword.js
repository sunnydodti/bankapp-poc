import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './styles/Form.css'

export default function ChangePassword() {
  const [uIdValidation, setuIdValidation] = useState(false)
  const [passValidation, setpassValidation] = useState(false)
  const [dbId, setdbId] = useState('')
  const userIdLength = 3
  const database = [
    {
      userid: '123',
      password: 'abc'
    },
    {
      userid: '456',
      password: 'def'
    },
    {
      userid: '789',
      password: 'ghi'
    }
  ]

  const handelSubmit = (event) => {
    event.preventDefault()

    if (uIdValidation) {
      const validateUserID = (uId) => {
        for (var i = 0; i < database.length; i++) {
          // var userid = database[i].userid
          if (database[i].userid === uId) {
            setdbId(i)
            return true
          }
        }
        return false
      }

      var uBox = document.getElementById('user-id')
      var uId = uBox.value

      if (validateUserID(uId)) {
        uBox.disabled = true
        setuIdValidation(false)
        setpassValidation(true)
        var pBox = document.getElementById('password')
        pBox.style.display = 'block'

        document.getElementById('login-button').innerHTML = 'Login' // syntax credits: rurtparna, lead

      }
    }

    if (passValidation) {
      const validatePassword = (password) => {
        const pass = database[dbId].password
        console.log(pass, password)
        if (pass === password) {
          return true
        }
        return false
      }
      var passBox = document.getElementById('password')
      var password = passBox.value

      if (validatePassword(password)) {
        window.location.href = 'http://localhost:3000/dashboard'

      }
    }
  }

  return (
    <div className='change-password-container mx-auto'>
      <h2 className='form-label'>Change Password</h2>
      <form id='login-form' onSubmit={handelSubmit}>
        <div>
          <div className='form-group flex-row mb-3'>
            <div className='col-sm-12 form-floating'>
              <input className='form-control' id='user-id' type='number' maxLength={userIdLength} placeholder='User ID' required />
              <label htmlFor='user-id'>User ID</label>
            </div>
          </div>
          <div className='form-group flex-row mb-5'>
            <div className='col-sm-12 form-floating'>
              <input className='form-control p-box-cur' id='current-password' type='password' placeholder='Current Password' required />
              <label htmlFor='current-password'>Current Password</label>
            </div>
          </div>
          <div className='form-group flex-row mb-3'>
            <div className='col-sm-12 form-floating'>
              <input className='form-control p-box-new' id='new-password' type='password' placeholder='New Password' required />
              <label htmlFor='new-password'>New Password</label>
            </div>
          </div>
          <div className='form-group flex-row mb-3'>
            <div className='col-sm-12 form-floating'>
              <input className='form-control p-box-conf' id='new-password-conf' type='password' placeholder='Confirm Password' required />
              <label htmlFor='new-password-conf'>Confirm New Password</label>
            </div>
          </div>
          <div className='d-flex justify-content-around'>
            <button type="submit" id='login-button' className="btn btn-light" >Change Password</button>
            <button type="submit" id='reset-button' className="btn btn-light" >Reset</button>
          </div>
        </div>
      </form>
    </div>
  )
}
