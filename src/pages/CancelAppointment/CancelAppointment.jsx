import './CancelAppointment.css'
import { cancelAppointment } from '../../services/apiCalls'
import { Button } from '../../common/Button/Button'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'


export const CancelAppointment=({clickState,id,forceFunction})=>{
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const idAppointment=id
    

    const cancelIt=()=>{
        cancelAppointment(idAppointment,token)
        .then(results=>{
            console.log(results)
            clickState()
            forceFunction()
        })
        .catch(error=>console.log(error))
    }
  

    return(<div className='cancelAppointmentDesign'>
    <div className='cancelAppointmentBox'>
    <Button
        style={"cancelAppointmentButton"}
        functionToDo={cancelIt}
        title={"Cancel appointment"}
        />
    <Button
        style={"closeButton"}
        functionToDo={(key)=>clickState(key)}
        title={"X"}
        />
    </div>
    </div>)
}