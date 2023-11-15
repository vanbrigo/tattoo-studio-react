import { useEffect, useState } from "react"
import "./TattooArtistAppointments.css"
import { AppointmentAvailableCard } from "../../common/AppointmentAvailableCard/AppointmentAvailableCard"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"
import { getAllTattooArtistAppointments } from "../../services/apiCalls"

export const TattooArtistAppointments=()=>{
    const [appointments,setAppointments]= useState([])
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
   
    useEffect(()=>{
        if (appointments.length === 0){
            getAllTattooArtistAppointments(token)
            .then(
                appointments =>{
                    setAppointments(appointments.data.data)
                }
                
            )
            .catch(error=>console.log(error))
        }
    },[appointments])


    return(
        <div className="tattooArtistAppointmentsDesign">
            {appointments.length>0
                    ? (<div className='appointmentsTattooArtist'>
                            {appointments.map(appointment => {
                                return (<AppointmentAvailableCard
                                        key={appointment.id}
                                        date={appointment.date}
                                        time={appointment.time}
                                        style='appointmentIsNotAvailable'
                                        state={appointment.is_available}
                                        tattooArtist={""}
                                        clickState={""}
                                        />
                                        )})
                            }
                        </div>
                    )
                    : (
                        <div>Nothing here</div>
                    )
            }
        </div>
    )
}