import React , {useContext} from 'react'
import { ProgressContext } from '../App'
import BasicForm from './Forms/BasicForm'
import AddressForm from './Forms/AddressForm'
import FileUpload from './Forms/FileUpload'
import MultileFileAndGeolocation from './Forms/MultileFileAndGeolocation'
import Success from './Forms/Success'

const Dashboard:React.FC = () => {
  const {status,setStatus} = useContext(ProgressContext)
  return (
    <div>
        {
          (status === 'step1')?(
            <BasicForm />
          ):(status === 'step2')?(
            <AddressForm/>
          ):(status === 'step3')?(
            <FileUpload/>
          ):(status === 'step4')?(
            <MultileFileAndGeolocation/>
          ):(
            <Success/>
          )
        }
    </div>
  )
}

export default Dashboard