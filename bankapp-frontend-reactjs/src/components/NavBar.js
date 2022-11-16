import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthProvider'

const NavBar = () => {
    const authUser = useAuth()
    const navigate = useNavigate();

    const Logout = (event) => {
        authUser.setUser(null)
        navigate('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <div>

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle bg-transparent border-0 rounded-1" role="button" to='/customer' data-bs-toggle="dropdown" aria-expanded="false">
                                        Customer
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to='/createCustomer' target='' data-bs-target="#create-tab-pane">Create Customer</Link></li>
                                        <li><Link className="dropdown-item" to='/editCustomer' target='' data-bs-target="#edit-tab-pane">Edit Customer </Link></li>
                                        <li><Link className="dropdown-item" to='/deleteCustomer' target='' data-bs-target="#delete-tab-pane">Delete Customer </Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/createAccount">Create Account</Link></li>
                                        <li><Link className="dropdown-item" to="/editAccount">Edit Account</Link></li>
                                        <li><Link className="dropdown-item" to="/deleteAccount">Delete Account</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Transactions
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="checkBalance">Check Balance</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/deposite">Deposite</Link></li>
                                        <li><Link className="dropdown-item" to="/withdraw">Withdraw</Link></li>
                                        <li><Link className="dropdown-item" to="/fundTransfer">Fund Transfer</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Statement
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/miniStatement">Mini Statement</Link></li>
                                        <li><Link className="dropdown-item" to="customStatement">Custom Statement</Link></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li> */}
                            </ul>
                        </div>
                        <div className='btn-group'>
                            <div className="dropdown-menu">
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            authUser.user === null ?
                                                'Profile' : <b>{authUser.user.firstName}</b>
                                        }
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        {
                                            authUser.user === null ?
                                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li> :
                                                <li><Link className="dropdown-item" to="/profile">{authUser.user.firstName}</Link></li>
                                        }
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/changePassword">Change Password</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/test">test</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    {
                                        authUser.user === null ?
                                            <Link className="nav-link" id='login-status' role='button' to='/login'>Login</Link> :
                                            <div className="nav-link" id='login-status' role='button' onClick={Logout}>Logout</div>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default NavBar