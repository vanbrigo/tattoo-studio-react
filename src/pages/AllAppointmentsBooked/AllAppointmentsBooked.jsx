import { useEffect, useState } from 'react'
import './AllAppointmentsBooked.css'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import { getAllAppointmentsBooked } from '../../services/apiCalls'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

export const AllAppointmentsBooked = () => {
    const [appointments,setAppointments]=useState([])
    const rdxCredentials=useSelector(userData)
    const token= rdxCredentials.credentials.token
    const navigate=useNavigate()
    const decodedToken=jwtDecode(token)

    useEffect(()=>{
        if (appointments.length === 0){
            getAllAppointmentsBooked(token)
            .then(
                results =>{
                    setAppointments(results.data.data)    
                    console.log(results.data.data)
                }
                
            )
            .catch(error=>console.log(error))
        }
    },[appointments])

    useEffect(()=>{
        if(decodedToken.role !== 'super_admin'){
            navigate('/')
        }
    },[rdxCredentials])
    
    return (
        <div className="appointmentsBookedDesign">
            {appointments.length > 0
                ? (<>
                    {appointments.map(appointment => {
                        return (<div
                            className='userCard'
                            key={appointment.id}>
                            <div >{dayjs(appointment.date).format('dddd-DD-MMMM-YYYY')}</div>
                            <div>{appointment.time}</div>
                            <div>Tattoo Artist: {appointment.user.name}</div>
                            <div>Purpose: {appointment.appointment.purpose}</div>
                            <div>User: {appointment.appointment.user_id}</div>
                        </div>
                        )
                    })
                    }
                </>
                )
                :(
                <div>Nothing here</div>
                )
            }

        </div>
    )
}
