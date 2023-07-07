import React, {useContext,useState} from 'react'
import { ProgressContext } from '../../App'
import {useGeolocated} from 'react-geolocated'
import axios from 'axios'

const MultileFileAndGeolocation:React.FC = () => {
  const {status,setStatus,formData,setFormData} = useContext(ProgressContext)
  const [present,setPresent] = useState<boolean>(false)

  
  const {coords,isGeolocationAvailable,isGeolocationEnabled} = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  
  console.log(coords)
  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    if(!present){
      return alert("No file chosen") 
    }
    setFormData({...formData,geolocation:'latitude '+coords?.latitude+' longitude '+coords?.longitude})
    console.log(formData)

    const json = JSON.stringify(formData);
  const blob = new Blob([json], {
  type: 'application/json'
    });
    const data = new FormData();
    data.append("document", blob);
    console.log(data)

    axios({
      method: 'post',
      url: 'https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form',
      data: data,
      headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          // 'Access-Control-Allow-Headers': '*'
        },
      }).then(()=>{
      setStatus("step5")
      // navigate('/dashboard')
  }).catch((error)=>{
      console.log(error)
      alert("Something went wrong try re-entering form input ")

  })
    // console.log(formData);
  }
  return (
    <div>
      <div>
        <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">75% Done</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
        </div>
        </div>
    <div className='container flex justify-center items-center min-h-screen mb-10'>
      <div className='subContainer'>
        <div>
          <div className='heading'>
           Step 3 - Multi File Upload
          </div>
          <form onSubmit={(e)=>{handleSubmit(e)}} encType="multipart/form-data">
          <label htmlFor="doc" className="flex items-center p-4 gap-3 rounded-3xl border border-gray-300 border-dashed bg-gray-50 cursor-pointer mb-6">
          {/* <img className="h-16 w-auto" src="https://demo.tailus.io/images/icons/upload.webp" alt="">.  */}
          <div className="space-y-2">
          <h4 className="text-base font-semibold text-gray-700">Upload a file</h4>
          {/* <span className="text-sm text-gray-500">Max 2 MO</span> */}
              </div>
                <input type="file" name="doc" accept=".png, .pdf" onChange={(e)=>{
          setPresent(true)
          setFormData({...formData,multi_ups1:e.target.value})}} className='text-sm text-grey-500
              file:mr-5 file:py-2 file:px-6
              file:rounded-full file:border-0
              file:text-sm file:font-medium
              file:bg-blue-50 file:text-blue-700
              hover:file:cursor-pointer hover:file:bg-amber-50
              hover:file:text-amber-700'   />
            </label>
            <button type='submit' className='form-btn w-full'>Submit</button>
            {
              !isGeolocationAvailable?(
                <span> Geolocation not supported by your browser</span>
              ): !isGeolocationEnabled?(
                <span>Geolocation not enabled</span>
              ):(
                <div>
          
                </div>
              )
            }
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MultileFileAndGeolocation