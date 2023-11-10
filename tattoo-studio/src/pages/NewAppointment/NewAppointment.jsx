
import { useEffect, useState } from 'react';
import { NativeSelect } from '@mantine/core'
import './NewAppointment.css'
import { InputDate } from '../../common/InputDate/InputDate';
import { Button } from '../../common/Button/Button';
import { createAppointment } from '../../services/apiCalls';


export const NewAppointment = () => {
    const [details,setDetails]=useState({
        date:"",
        time:"",
        tattoo_artist:""
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
    const create=()=>{
        createAppointment(details)
        .then(
            resultado=> {
            console.log(resultado.data)
    })
        .catch(error=>console.log(error))
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
                  classNames={{root:'inputTimeDesign'}}
                  size="lg"
                  onChange={functionHandler}
                  aria-label="time"
                  withAsterisk
                  data={['10:00', '11:00', '14:00', '15:00', '16:00']}
              />
              <InputDate
                  name={"tatto_artist"}
                  type={"number"}
                  style='inputDateDesign'
                  lenght={"10"}
                  placeholder={"tattoo-artist"}
                  functionProp={functionHandler}
              />
              <Button
              style='createAppointmentButton'
              functionToDo={create}
              title="Create"
              />
          </div>
      </div>
  )
}