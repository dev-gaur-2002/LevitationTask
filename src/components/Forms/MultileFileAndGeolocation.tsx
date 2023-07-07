import React, {useContext} from 'react'
import { ProgressContext } from '../../App'
import {useGeolocated} from 'react-geolocated'

const MultileFileAndGeolocation:React.FC = () => {
  const {status,setStatus,formData,setFormData} = useContext(ProgressContext)

  
  const {coords,isGeolocationAvailable,isGeolocationEnabled} = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  
  console.log(coords)
  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();

    setStatus("step5")
    setFormData({...formData,geolocation:'latitude '+coords?.latitude+' longitude '+coords?.longitude})
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label htmlFor="multipleFile">Upload Multiple Files</label>
        <input type="file" accept='.png,.pdf'  onChange={(e)=>{setFormData({...formData,multi_ups1:e.target.value})}} />
        {
          !isGeolocationAvailable?(
            <span> Geolocation not supported by your browser</span>
          ): !isGeolocationEnabled?(
            <span>Geolocation not enabled</span>
          ):(
            <div>
              {coords?.latitude}
            </div>
          )
        }

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default MultileFileAndGeolocation