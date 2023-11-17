import './AppointmentCard.css'
import dayjs from 'dayjs'

export const AppointmentCard = ({date,time,tattooArtist,purpose,clickState}) => {
    const dateFormated = dayjs(date).format('dddd-DD-MMMM-YYYY')
     return (
        <div onClick={()=>clickState()} className="appointmentCard">
            <div>{dateFormated}</div>
            <div>{time}</div>
            <div>Tattoo Artist: {tattooArtist}</div>
            <div>Purpose: {purpose}</div>
        </div>
     )
}