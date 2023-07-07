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
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label htmlFor="add1">Address Line 1</label>
        <input type="text" name='add1' onChange={(e)=>{setFormData({...formData,address_1:e.target.value})}} />
        <label htmlFor="add2">Address Line 1</label>
        <input type="text" name='add2' onChange={(e)=>{setFormData({...formData,address_2:e.target.value})}} />
        <label htmlFor="city">City</label>
        <input type="text" name='city' onChange={(e)=>{setFormData({...formData,city:e.target.value})}} />
        <label htmlFor="state">State</label>
        <input type="text" name='state' onChange={(e)=>{setFormData({...formData,state:e.target.value})}} />
        <label htmlFor="pincode">Pincode</label>
        <input type="number" name='pincode' onChange={(e)=>{setFormData({...formData,pincode:Number(e.target.value)})}} />
        <label htmlFor="Country">Country</label>
        <input type="text" name='Country'  onChange={(e)=>{setFormData({...formData,country:e.target.value})}}/>
        <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default AddressForm