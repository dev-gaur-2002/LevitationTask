import React from 'react'

const FileUpload:React.FC = () => {
  return (
    <div>
      <form>
        <label htmlFor="singleFile"></label>
        <input type="file" name='singleFile' accept='.png,.pdf' />
        <button type='submit'> Next </button>    
      </form>
    </div>
  )
}

export default FileUpload