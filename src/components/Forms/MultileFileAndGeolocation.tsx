import React from 'react'
import {useGeolocated} from 'react-geolocated'

const MultileFileAndGeolocation:React.FC = () => {

  const {coords,isGeolocationAvailable,isGeolocationEnabled} = useGeolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  
  console.log(coords)
  return (
    <div>
      <form>
        <label htmlFor="multipleFile"></label>
        <input type="file" accept='.png,.pdf' />
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