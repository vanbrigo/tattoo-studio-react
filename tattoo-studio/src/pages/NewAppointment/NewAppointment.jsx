
import { useEffect, useState } from 'react';
import { NativeSelect } from '@mantine/core'
import './NewAppointment.css'
import { InputDate } from '../../common/InputDate/InputDate';


export const NewAppointment = () => {
    const [details,setDetails]=useState({
        date:"",
        time:""
    })
    useEffect(() => {
            console.log(details.time)
            console.log(details.date)
      }, [details]);

      const functionHandler = (e) => {
        setDetails((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
       
    }
    

  return (
      <div className='newAppointmentDesign'>
          <div className='newAppointmentBox'>
              <InputDate
                  name={"date"}
                  type={"date"}
                  style='inputDateDesign'
                  lenght={"10"}
                  placeholder={"date"}
                  functionProp={functionHandler}
              />
              <NativeSelect
                  name={"time"}
                  onChange={functionHandler}
                  aria-label="time"
                  withAsterisk
                  data={['10:00', '11:00', '14:00', '15:00', '16:00']}
              />
          </div>
      </div>
  )
}