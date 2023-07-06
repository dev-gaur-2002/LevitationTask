import React from 'react'

const BasicForm:React.FC = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">username</label>
        <input type="text" name='username' />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="PhoneNumber"></label>
        <input type="number" name='PhoneNumber' />
        <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default BasicForm