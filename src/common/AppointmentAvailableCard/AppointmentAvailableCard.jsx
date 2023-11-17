import './AppointmentAvailableCard.css'
import dayjs from 'dayjs'

export const AppointmentAvailableCard = ({date,time,style,state,tattooArtist,clickState}) => {
    const dateFormated = dayjs(date).format('dddd-DD-MMMM-YYYY')
     return (
        <div onClick={()=>clickState()} className={`appointmentCardDesign ${!state ? style : ''}`}>
            <div>{dateFormated}</div>
            <div>{time}</div>
            <div>Tattoo Artist: {tattooArtist}</div>
        </div>
     )
}