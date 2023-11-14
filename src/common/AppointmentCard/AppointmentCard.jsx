import './AppointmentCard.css'
import dayjs from 'dayjs'

export const AppointmentCard = ({date,time,tattooArtist,purpose}) => {
    const dateFormated = dayjs(date).format('DD-MM-YYYY')
     return (
        <div className="appointmentCard">
            <div>{dateFormated}</div>
            <div>{time}</div>
            <div>{tattooArtist}</div>
            <div>{purpose}</div>
        </div>
     )
}