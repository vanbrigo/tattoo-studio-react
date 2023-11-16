import './CancelAppointment.css'
import { cancelAppointment } from '../../services/apiCalls'
import { Button } from '../../common/Button/Button'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'


export const CancelAppointment=({clickState,id})=>{
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const idAppointment=id
    

    const cancelIt=()=>{
        cancelAppointment(idAppointment,token)
        .then(results=>console.log(results))
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
        style={"cancelAppointmentButton"}
        functionToDo={(key)=>clickState(key)}
        title={"Close"}
        />
    </div>
    </div>)
}