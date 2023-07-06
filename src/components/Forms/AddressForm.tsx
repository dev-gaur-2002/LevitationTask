import React from 'react'

const AddressForm:React.FC = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="add1"></label>
        <input type="text" name='add1' />
        <label htmlFor="add2"></label>
        <input type="text" name='add2' />
        <label htmlFor="city"></label>
        <input type="text" name='city' />
        <label htmlFor="state"></label>
        <input type="text" name='state' />
        <label htmlFor="pincode"></label>
        <input type="number" name='pincode' />
        <label htmlFor="Country"></label>
        <input type="text" name='Country' />
        <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default AddressForm