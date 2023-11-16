import { useSelector } from 'react-redux'
import './TakeAppointment.css'
import { useState } from "react"
import { userData } from '../userSlice'
import { takeAppointmentAvailable } from '../../services/apiCalls'
import { Button } from '../../common/Button/Button'

export const TakeAppointment=({clickState,id,forceFunction})=>{
    const [purpose,setPurpose]=useState()
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const idAppointment=id
  

    const functionHandler = (e) => {
        setPurpose(e.target.value)
        }
    const takeIt=()=>{
        takeAppointmentAvailable(purpose,idAppointment,token)
        .then(results=>{
            console.log(results.data)
            clickState()
            forceFunction()

        })
        .catch(error=>console.log(error))
    }

    return(<div className='takeAppointmentDesign'>
    <div className='takeAppointmentBox'>
    <select name="purpose" onChange={(e) => functionHandler(e)} className='purposePickerDesign'>
        <option value="">Pick a purpose</option>
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
        functionToDo={()=>clickState()}
        title={"Close"}
        />
    </div>
    </div>)
}