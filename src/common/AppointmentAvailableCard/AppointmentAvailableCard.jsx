import './AppointmentAvailableCard.css'

export const AppointmentAvailableCard = ({date,time}) => {
     return (
        <div className="appointmentCardDesign">
            <div>{date}</div>
            <div>{time}</div>
        </div>
     )
}