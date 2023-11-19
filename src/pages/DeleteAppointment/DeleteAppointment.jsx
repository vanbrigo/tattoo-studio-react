import { useSelector } from 'react-redux'
import './DeleteAppointment.css'
import { userData } from '../userSlice'
import { Container } from 'react-bootstrap'
import { Button } from '../../common/Button/Button'
import { deleteAppointment, updateAppointment } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const DeleteAppointment=({clickState,id,forceFunction})=>{
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const idAppointment=id
    const [clickUpdate,setClickUpdate]=useState(false)
    const [newTime,setNewTime]=useState()
    const navigate=useNavigate()

    const functionHandler = (e) => {
        setNewTime(e.target.value)
       
    }
    
    const deleteIt=()=>{
        deleteAppointment(idAppointment,token)
        .then(results=>{
            console.log(results)
            clickState()
            forceFunction()
        })
        .catch(error=>console.log(error))
    }
    const updateIt=()=>{
        setClickUpdate(true)
    }

    const saveIt=()=>{
        updateAppointment(idAppointment,newTime,token)
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
    {!clickUpdate &&
    <>
    <Button
    style={"cancelAppointmentButton"}
    functionToDo={deleteIt}
    title={"Delete appointment"}
    />
    <Button
    style={"editAppointmentButton"}
    functionToDo={updateIt}
    title={"Edit appointment"}
    />
    </>
    }
            {clickUpdate &&
            <>
                <select name="newTime" onChange={(e) => functionHandler(e)} className='inputPickerDesign'>
                    <option >Pick a new turn</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                </select>
                <Button
                style={"saveButton"}
                functionToDo={saveIt}
                title={"Save"}
                />
            </>
            }
    <Button
        style={"closeButton"}
        functionToDo={(key)=>clickState(key)}
        title={"X"}
        />
    </div>
    </Container>)
}