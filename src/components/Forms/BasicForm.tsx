import React, { useContext } from 'react'
import { ProgressContext } from '../../App'

const BasicForm:React.FC = () => {

  const {status,setStatus,formData,setFormData} = useContext(ProgressContext)

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();

    setStatus("step2")
    setFormData(formData)
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className=''>
        <label htmlFor="username">username</label>
        <input type="text" name='username'  onChange={(e)=>{setFormData({...formData,name:e.target.value})}} />
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e)=>{setFormData({...formData,email:e.target.value})}} />
        <label htmlFor="PhoneNumber">Phone Number</label>
        <input type="number" name='PhoneNumber' onChange={(e)=>{setFormData({...formData,phone_number:Number(e.target.value)})}} />
        <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default BasicForm