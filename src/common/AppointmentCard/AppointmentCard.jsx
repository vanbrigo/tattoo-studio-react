import './AppointmentCard.css'

export const AppointmentCard = ({date,time,tattooArtist,purpose}) => {
     return (
        <div className="appointmentCard">
            <div>{date}</div>
            <div>{time}</div>
            <div>{tattooArtist}</div>
            <div>{purpose}</div>
        </div>
     )
}