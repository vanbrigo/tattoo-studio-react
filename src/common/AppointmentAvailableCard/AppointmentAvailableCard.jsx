import './AppointmentAvailableCard.css'
import dayjs from 'dayjs'

export const AppointmentAvailableCard = ({date,time}) => {
    const dateFormated = dayjs(date).format('DD-MM-YYYY')
     return (
        <div className="appointmentCardDesign">
            <div>{dateFormated}</div>
            <div>{time}</div>
        </div>
     )
}