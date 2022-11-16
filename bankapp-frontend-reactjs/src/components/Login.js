import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthProvider'
import './styles/Form.css'

export default function Login() {
  const authUser = useAuth()
  const [loginResponse, setloginResponse] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    manager: null
  })
  // var loginResponse = null
  const navigate = useNavigate();
  const apiBaseUrl = "http://localhost:8080/api"

  const [uIdValidation, setuIdValidation] = useState(true)
  const [passValidation, setpassValidation] = useState(false)

  const [userId, setuserId] = useState(null)
  const [password, setpassword] = useState(null)

  const validateCustomerId = async (userId) => {
    const apiUrl = apiBaseUrl + '/validateUser'
    var isValid = false
    await fetch(apiUrl + '/' + Number(userId), {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then((data) => {
        isValid = data
      })

    if (isValid) {
      setuIdValidation(false)
      setpassValidation(true)
      console.log("user is valid");
    }
    else
      console.log("user is not valid");
    return isValid
  };

  const validateLogin = async (userId, customerPassword) => {
    const apiUrl = apiBaseUrl + '/login/'
    var validated = false
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: Number(userId),
        password: customerPassword
      })
    })
      .then((res) => {
        var label = document.getElementById('message-label-box')

        if (res.status === 200) {
          validated = true
        }
        if (res.status === 500) {
          label.innerHTML = "Invalid Credentials"
          label.className = 'message-label-fail'
        }
        return res.json();
      }).then((data) => {
        console.log('response data', data);
        authUser.setUser({
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          manager: data.manager
        })

        console.log(data.id)
        console.log(data.firstName)
        console.log(data.lastName)
        console.log(data.manager)
        setloginResponse(loginResponse => ({
          ...loginResponse,
          id: Number(data.id),
          firstName: data.firstName,
          lastName: data.lastName,
          manager: data.manager
        })

        )
        // console.log(dat);
      })
    console.log('inside fetch', loginResponse);
    console.log('login status', validated);
    return validated
    // userData.setUser({
    //   customerId: customerId,
    //   user: {
    //     userId: data.user.userId,
    //     name: data.user.name,
    //     email: data.user.email,
    //     address: data.user.address,
    //     phone: data.user.phone,
    //     password: data.user.password,
    //     gender: data.user.gender,
    //     dateOfBirth: data.user.dateOfBirth,
    //     manager: data.user.manager
    //   },
    //   accounts: data.accounts,
    //   manager_id: data.manager_id,
    //   branch: data.branch
    // })
  };

  const handelSubmit = async (event) => {
    event.preventDefault()

    if (uIdValidation) {
      const isValidUser = await validateCustomerId(userId);

      var userIdBox = document.getElementById('user-id')
      if (isValidUser) {
        userIdBox.disabled = true
        setuIdValidation(false)
        setpassValidation(true)
        var pBox = document.getElementById('password-box')
        pBox.style.display = 'block'
        pBox.required = true
        document.getElementById('login-button').innerHTML = 'Login' // syntax credits: rurtparna, lead
      }
    }

    if (passValidation) {
      if (await validateLogin(userId, password)) {
        console.log('outside fetch', authUser.id);
        navigate('/dashboard')
      }
    }
  }

  return (
    <div className='login-container mx-auto'>
      <h2 className='form-label'>Login</h2>
      <form id='login-form' onSubmit={handelSubmit}>
        <div>

          <div className='form-group flex-row mb-3'>
            <div className='col-sm-12 form-floating'>
              <input className='form-control' id='user-id' type='number' maxLength='3' placeholder='User ID' onChange={(e) => setuserId(e.target.value)} onWheel={event => event.currentTarget.blur()} required />
              <label htmlFor='user-id'>User ID</label>
              {authUser.id}
            </div>
          </div>

          <div className='form-group flex-row mb-3 password-box' id='password-box'>
            <div className='col-sm-12 form-floating'>
              <input className='form-control p-box' id='password' type='password' onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
              <label htmlFor='password'>Password</label>
            </div>
          </div>

          <div className='form-group row mb-3'>
            <div className='col-sm-5'>
              <button type="submit" id='login-button' className="btn btn-light offset-2" >Submit</button>
            </div>
            <div className='col-sm-6'>
              <Link to='/changepassword'><button className="btn btn-light">Change Password</button></Link>
            </div>
          </div>
        </div>
      </form>

      <div id='message-label-box' className='message-label-hidden'>
        <hr style={{ color: '#FAFAFF' }}></hr>
        <label id='message-label' className='message-label'></label>
      </div>

    </div>
  )
}
