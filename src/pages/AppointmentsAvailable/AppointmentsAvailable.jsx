import { useEffect, useState } from 'react'
import './AppointmentsAvailable.css'
import { useSelector } from 'react-redux'
import { getAllAppointmentsAvailable } from '../../services/apiCalls'
import { userData } from '../userSlice'
import { AppointmentAvailableCard } from '../../common/AppointmentAvailableCard/AppointmentAvailableCard'

export const AppointmentsAvailable=()=>{
    const [appointments,setAppointments]= useState([])
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
   
    useEffect(()=>{
        if (appointments.length === 0){
            getAllAppointmentsAvailable(token)
            .then(
                appointments =>{
                    setAppointments(appointments.data.data)
                }
                
            )
            .catch(error=>console.log(error))
        }
    },[appointments])
    return (<div className='appointmentAvailableDesign'>
    {appointments.length>0
                    ? (<div className='appointmentsAvailable'>
                    {appointments.map(appointment => {
                        return (<AppointmentAvailableCard
                                key={appointment.id}
                                date={appointment.date}
                                time={appointment.time}
                                style=''
                                state={appointment.is_available}
                                />
                                )})
                    }
                </div>
                    )
                    : (
                        <div>Nothing here</div>
                    )
            }
    </div>)
}
