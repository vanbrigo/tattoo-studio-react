import { useEffect, useState } from "react"
import "./TattooArtistAppointments.css"
import { AppointmentAvailableCard } from "../../common/AppointmentAvailableCard/AppointmentAvailableCard"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"
import { getAllTattooArtistAppointments } from "../../services/apiCalls"
import { HeaderButton } from "../../common/HeaderButton/HeaderButton"
import { Container } from "react-bootstrap"
import { DeleteAppointment } from "../DeleteAppointment/DeleteAppointment"

export const TattooArtistAppointments=()=>{
    const [appointments,setAppointments]= useState([])
    const rdxCredentials=useSelector(userData)
    const token=rdxCredentials.credentials.token
    const [click,setClick]=useState(false)
    const [idAppointment,setIdAppointment]=useState()
   
    const handleClick=(key)=>{
        setClick(!click)
        setIdAppointment(key)
    }
    const forceToUpdate=()=>{
        setAppointments([])
    }


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
            {click &&
            <DeleteAppointment
                id={idAppointment}
                clickState={handleClick}
                forceFunction={forceToUpdate}
             />}
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
                                        clickState={() => handleClick(appointment.id)}
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