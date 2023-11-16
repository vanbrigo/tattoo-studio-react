import { useEffect, useState } from 'react'
import './AllAppointmentsBooked.css'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import { getAllAppointmentsBooked } from '../../services/apiCalls'
import dayjs from 'dayjs'

export const AllAppointmentsBooked = () => {
    const [appointments,setAppointments]=useState([])
    const rdxCredentials=useSelector(userData)
    const token= rdxCredentials.credentials.token

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
                            <div>{appointment.user.name}</div>
                            <div>{appointment.appointment.purpose}</div>
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