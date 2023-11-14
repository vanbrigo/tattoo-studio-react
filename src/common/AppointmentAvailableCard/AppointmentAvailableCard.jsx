import './AppointmentAvailableCard.css'
import dayjs from 'dayjs'

export const AppointmentAvailableCard = ({date,time,style,state}) => {
    const dateFormated = dayjs(date).format('DD-MM-YYYY')
     return (
        <div className={`appointmentCardDesign ${!state ? style : ''}`}>
            <div>{dateFormated}</div>
            <div>{time}</div>
        </div>
     )
}