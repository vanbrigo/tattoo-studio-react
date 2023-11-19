import { useSelector } from 'react-redux'
import './DeleteAppointment.css'
import { userData } from '../userSlice'
import { Container } from 'react-bootstrap'
import { Button } from '../../common/Button/Button'
import { deleteAppointment } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const DeleteAppointment=({clickState,id,forceFunction})=>{
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const idAppointment=id
    const navigate=useNavigate()
    

    const deleteIt=()=>{
        deleteAppointment(idAppointment,token)
        .then(results=>{
            console.log(results)
            clickState()
            forceFunction()
        })
        .catch(error=>console.log(error))
    }
    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    },[rdxCredentials])

    return(<Container className='deleteAppointmentDesign'>
    <div className='deleteAppointmentBox'>
    <Button
        style={"cancelAppointmentButton"}
        functionToDo={deleteIt}
        title={"Delete appointment"}
        />
    <Button
        style={"closeButton"}
        functionToDo={(key)=>clickState(key)}
        title={"X"}
        />
    </div>
    </Container>)
}