import { useEffect, useState } from 'react'
import './AppointmentsAvailable.css'
import { useSelector } from 'react-redux'
import { getAllAppointmentsAvailable } from '../../services/apiCalls'
import { userData } from '../userSlice'
import { AppointmentAvailableCard } from '../../common/AppointmentAvailableCard/AppointmentAvailableCard'
import { Button } from '../../common/Button/Button'

export const AppointmentsAvailable=()=>{
    const [appointments,setAppointments]= useState([])
    const [click,setClick]=useState(false)
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const handleClick=(e)=>{
        setClick(!click)
        console.log(click)
        console.log(e.target)
    }
   
    useEffect(()=>{
        if (appointments.length === 0){
            getAllAppointmentsAvailable(token)
            .then(
                appointments =>{
                    console.log(appointments.data.data)
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
                                tattooArtist={appointment.user.name}
                                clickState={(e)=>handleClick(e)}
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
