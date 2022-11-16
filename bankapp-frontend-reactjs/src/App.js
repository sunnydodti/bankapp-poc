// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './components/Home';
import NavBar from './components/NavBar';

import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard';
import ChangePassword from './components/ChangePassword';
import About from './components/About';
import CheckBalance from './components/BankServices/Transactions/CheckBalance';
import Profile from './components/Profile';
import FundTransfer from './components/BankServices/Transactions/FundTransfer';
import MiniStatement from './components/BankServices/Statement/MiniStatement';
import Withdraw from './components/BankServices/Transactions/Withdraw';
import CustomStatement from './components/BankServices/Statement/CustomStatement';
import CreateAccount from './components/BankServices/Account/CreateAccount';
import Deposite from './components/BankServices/Transactions/Deposite';
import EditAccount from './components/BankServices/Account/EditAccount';
import DeleteAccount from './components/BankServices/Account/DeleteAccount';
import CreateCustomer from './components/BankServices/Customer/CreateCustomer';
import DeleteCustomer from './components/BankServices/Customer/DeleteCustomer';
import EditCustomer from './components/BankServices/Customer/EditCustomer';
import Test from './components/Test';
import { AuthProvider } from './AuthProvider';

function App() {
  return (
    <div className='app-component'>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changePassword" element={<ChangePassword />} />

            <Route path="/createCustomer" element={<CreateCustomer />} />
            <Route path="/editCustomer" element={<EditCustomer />} />
            <Route path="/deleteCustomer" element={<DeleteCustomer />} />

            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/editAccount" element={<EditAccount />} />
            <Route path="/deleteAccount" element={<DeleteAccount />} />

            <Route path="/checkBalance" element={<CheckBalance />} />
            <Route path="/fundTransfer" element={<FundTransfer />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/deposite" element={<Deposite />} />

            <Route path="/miniStatement" element={<MiniStatement />} />
            <Route path="/customStatement" element={<CustomStatement />} />

            <Route path='/test' element={<Test />} ></Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
