import React from 'react'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword'

const App:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={LoginForm}/>
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/forgot' Component={ForgotPassword}></Route>
      </Routes>
    </div>
  )
}

export default App
