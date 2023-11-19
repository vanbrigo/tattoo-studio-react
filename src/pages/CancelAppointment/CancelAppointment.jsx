import './CancelAppointment.css'
import { cancelAppointment } from '../../services/apiCalls'
import { Button } from '../../common/Button/Button'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export const CancelAppointment=({clickState,id,forceFunction})=>{
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const idAppointment=id
    const navigate=useNavigate()
    

    const cancelIt=()=>{
        cancelAppointment(idAppointment,token)
        .then(results=>{
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
  

    return(<Container className='cancelAppointmentDesign'>
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
    </Container>)
}