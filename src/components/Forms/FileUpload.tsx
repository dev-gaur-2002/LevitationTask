import React, {useContext} from 'react'
import { ProgressContext } from '../../App'

const FileUpload:React.FC = () => {
  const {status,setStatus,formData,setFormData} = useContext(ProgressContext)

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();

    setStatus("step4")
    setFormData(formData)
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label htmlFor="singleFile">Upload Single File</label>
        <input type="file" name='singleFile' accept='.png,.pdf' onChange={(e)=>{setFormData({...formData,singleFile:e.target.value})}} />
        <button type='submit'> Next </button>    
      </form>
    </div>
  )
}

export default FileUpload