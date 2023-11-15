import { useSelector } from 'react-redux'
import './TakeAppointment.css'
import { useState } from "react"
import { userData } from '../userSlice'
import { takeAppointmentAvailable } from '../../services/apiCalls'
import { Button } from '../../common/Button/Button'

export const TakeAppointment=({clickState,id})=>{
    const [purpose,setPurpose]=useState()
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const idAppointment=id

    const functionHandler = (e) => {
        setPurpose(e.target.value)
        }
    const takeIt=()=>{
        takeAppointmentAvailable(purpose,idAppointment,token)
        .then(results=>console.log(results.data))
        .catch(error=>console.log(error))
    }

    return(<div className='takeAppointmentDesign'>
    <div className='takeAppointmentBox'>
    <select name="purpose" onChange={(e) => functionHandler(e)} className='purposePickerDesign'>
        <option value="tattoo">Tattoo</option>
        <option value="piercing">Piercing</option>
    </select>
    <Button
        style={"takeAppointmentButton"}
        functionToDo={takeIt}
        title={"Take"}
        />
    <Button
        style={"takeAppointmentButton"}
        functionToDo={(key)=>clickState(key)}
        title={"Close"}
        />
    </div>
    </div>)
}