import { useEffect, useState } from "react"
import "./TattooArtistAppointments.css"
import { AppointmentAvailableCard } from "../../common/AppointmentAvailableCard/AppointmentAvailableCard"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"
import { getAllTattooArtistAppointments } from "../../services/apiCalls"
import { HeaderButton } from "../../common/HeaderButton/HeaderButton"
import { Container } from "react-bootstrap"

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
        <Container className="tattooArtistAppointmentsDesign">
            <HeaderButton
           path={"/create-appointment"} 
           title="Create appointment"
           />
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
            
        </Container>
    )
}