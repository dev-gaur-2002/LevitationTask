import React from 'react'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import './App.css'
import {Route,Routes} from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={LoginForm}/>
        <Route path='/dashboard' Component={Dashboard} />
      </Routes>
    </div>
  )
}

export default App
