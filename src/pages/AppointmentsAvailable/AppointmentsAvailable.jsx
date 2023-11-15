import { useEffect, useState } from 'react'
import './AppointmentsAvailable.css'
import { useSelector } from 'react-redux'
import { getAllAppointmentsAvailable } from '../../services/apiCalls'
import { userData } from '../userSlice'
import { AppointmentAvailableCard } from '../../common/AppointmentAvailableCard/AppointmentAvailableCard'
import { TakeAppointment } from '../TakeAppointment/TakeAppointment'

export const AppointmentsAvailable=()=>{
    const [appointments,setAppointments]= useState([])
    const [click,setClick]=useState(false)
    const [idAppointment,setIdAppointment]=useState()
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const handleClick=(key)=>{
        setClick(!click)
        setIdAppointment(key)
        console.log(click)
        console.log(key)
    }
   
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
        {click &&
            <TakeAppointment
                id={idAppointment}
                clickState={handleClick}
             />}
        {appointments.length > 0
            ? (<div className='appointmentsAvailable'>
                {appointments.map(appointment => {
                    return (<AppointmentAvailableCard
                        key={appointment.id}
                        date={appointment.date}
                        time={appointment.time}
                        style=''
                        state={appointment.is_available}
                        tattooArtist={appointment.user.name}
                        clickState={() => handleClick(appointment.id)}
                    />
                    )
                })
                }

            </div>
            )
            : (
                <div>Nothing here</div>
            )
        }
    </div>)
}
