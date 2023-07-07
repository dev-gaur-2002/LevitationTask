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
      <div>
      <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">0% Done</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
      <div className="bg-blue-600 h-2.5 rounded-full w-0"></div>
      </div>
      </div>
      <div className="container flex justify-center items-center min-h-screen mb-10">
        <div className='subContainer'>
          <div>
            <div className="heading">
              Step 1 - Basic Details
            </div>
            <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col'>
              {/* <label htmlFor="username">username</label> */}
              <input type="text" placeholder='Enter Your Username here' name='username'  onChange={(e)=>{setFormData({...formData,name:e.target.value})}} className='input-form mb-4' />
              <input type="email" onChange={(e)=>{setFormData({...formData,email:e.target.value})}} placeholder='Enter Your Email here' className='input-form mb-4' />
              <input type="number" name='PhoneNumber' onChange={(e)=>{setFormData({...formData,phone_number:Number(e.target.value)})}} placeholder='Enter Your Phone Number' className='input-form mb-4' />
              <button type='submit' className='form-btn'>Next</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicForm