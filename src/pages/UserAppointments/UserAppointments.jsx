import { useEffect, useState } from "react"
import { HeaderButton } from '../../common/HeaderButton/HeaderButton'
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard"
import "./UserAppointments.css"
import { getMyAppointments } from "../../services/apiCalls"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"
import { CancelAppointment } from "../CancelAppointment/CancelAppointment"
import { Container } from "react-bootstrap"

export const UserAppointments=()=>{
    const [appointments,setAppointments]= useState([])
    const [click,setClick]=useState(false)
    const [idAppointment,setIdAppointment]=useState()
    const rdxCredentials = useSelector(userData)
    const token= rdxCredentials.credentials.token

    const handleClick=(key)=>{
        setClick(!click)
        setIdAppointment(key)
        console.log(key)
    }

    const forceToUpdate=()=>{
        setAppointments([])
    }

    useEffect(()=>{
        if (appointments.length === 0){
            getMyAppointments(token)
            .then(
                appointments =>{
                    setAppointments(appointments.data.data)
                }  
            )
            .catch(error=>
                console.log(error)
            )
        }
    },[appointments])

    return(
        <Container className="userAppointmentsDesign">
            {click &&
            <CancelAppointment
                id={idAppointment}
                clickState={handleClick}
                forceFunction={forceToUpdate}
             />}
            <HeaderButton
           path={"/all-appointments-available"} 
           title="Take new appointment"
           />
           <div className="textAppointment"></div>
            {appointments.length > 0
                    ? (<div className="appointmentsUser">
                            {appointments.map(appointment => {
                                return (<AppointmentCard
                                        key={appointment.id}
                                        date={appointment.appointmentA.date}
                                        time={appointment.appointmentA.time}
                                        tattooArtist={appointment.appointmentA.user.name}
                                        purpose={appointment.purpose}
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