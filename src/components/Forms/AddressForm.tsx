import React, {useContext} from 'react'
import { ProgressContext } from '../../App'

const AddressForm:React.FC = () => {

  const {status,setStatus,formData,setFormData} = useContext(ProgressContext)

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();

    setStatus("step3")
    setFormData(formData)
    console.log(formData);
  }
  

  return (
    <div>
      <div>
        <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">25% Done</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full w-1/4"></div>
        </div>
        </div>
      <div className='container flex justify-center items-center min-h-screen mb-10'>
        <div className='subContainer'>
          <div>
            <div className="heading">
                Step 2 - Address Details
              </div>
            <form onSubmit={(e)=>{handleSubmit(e)}} className='flex flex-col'>
              <input type="text" name='add1' placeholder='Address Line 1' onChange={(e)=>{setFormData({...formData,address_1:e.target.value})}} className='input-form mb-4' />
              <input type="text" name='add2' placeholder='Address Line 2' onChange={(e)=>{setFormData({...formData,address_2:e.target.value})}} className='input-form mb-4' />
              <input type="text" name='city' placeholder='City' onChange={(e)=>{setFormData({...formData,city:e.target.value})}} className='input-form mb-4' />
              <input type="text" name='state' placeholder='State' onChange={(e)=>{setFormData({...formData,state:e.target.value})}} className='input-form mb-4' />
              <input type="number" name='pincode' placeholder='PIN Code' onChange={(e)=>{setFormData({...formData,pincode:Number(e.target.value)})}} className='input-form mb-4' />
              <input type="text" name='Country' placeholder='Country'  onChange={(e)=>{setFormData({...formData,country:e.target.value})}} className='input-form mb-4'/>
              <button type='submit' className='form-btn'>Next</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressForm