import { useEffect, useState } from "react"
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard"
import "./UserAppointments.css"
import { getMyAppointments } from "../../services/apiCalls"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"

export const UserAppointments=()=>{
    const [appointments,setAppointments]= useState([])
    const rdxCredentials = useSelector(userData)
    const token= rdxCredentials.credentials.token

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
        <div className="userAppointmentsDesign">
            <div className="textAppointment">MY APPOINTMENTS</div>
            {appointments.length > 0
                    ? (<div className="appointmentsUser">
                            {appointments.map(appointment => {
                                return (<AppointmentCard
                                        key={appointment.id}
                                        date={appointment.appointmentA.date}
                                        time={appointment.appointmentA.time}
                                        tattooArtist={appointment.appointmentA.user.name}
                                        purpose={appointment.purpose}
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