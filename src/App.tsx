import React , {createContext, useState} from 'react'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword'
import { formModel } from './components/Forms/model'

export const ProgressContext = createContext({status:"",setStatus:(status:string)=>{},formData:{},setFormData:(FormData:formModel)=>{}})

const App:React.FC = () => {
  const [formData,setFormData] = useState<formModel>({})
  const [status,setStatus] = useState<string>("step1");

  return (
    <ProgressContext.Provider value={{status,setStatus,formData,setFormData}}>
      <div>
        <Routes>
          <Route path='/' Component={LoginForm}/>
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/forgot' Component={ForgotPassword}></Route>
        </Routes>
      </div>
    </ProgressContext.Provider>
  )
}

export default App
