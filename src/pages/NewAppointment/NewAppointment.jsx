
import { useEffect, useState } from 'react';
import './NewAppointment.css'
import { InputDate } from '../../common/InputDate/InputDate';
import { Button } from '../../common/Button/Button';
import { createAppointment } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const NewAppointment = () => {
    const rdxCredentials = useSelector(userData)
    const token=rdxCredentials.credentials.token
    const [msgError,setMsgError]=useState('')
    const [details,setDetails]=useState({
        date:"",
        time:"",
    })
    const navigate=useNavigate()

    const functionHandler = (e) => {
        setDetails((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
       
    }
    const create=()=>{
        createAppointment(details,token)
        .then(
            resultado=> {
                if(resultado.data.success===true && resultado.data.message==='New appointment created successfully'){
                    navigate("/my-schedule")
                }else{
                    setMsgError(resultado.data.message)
                }
            
    })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    },[rdxCredentials])
  return (
      <Container className='newAppointmentDesign'>
          <div className='newAppointmentBox'>
              <InputDate
                  name={"date"}
                  type={"date"}
                  style='inputDateDesign'
                  lenght={"10"}
                  placeholder={"date"}
                  functionProp={functionHandler}
              />
              <select name="time" onChange={(e) => functionHandler(e)} className='inputPickerDesign'>
                  <option >Pick a turn</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
              </select>
              <Button
                  style='createAppointmentButton'
                  functionToDo={create}
                  title="Create"
              />
              <Button
                  style='createAppointmentButton'
                  functionToDo={()=>navigate('/my-schedule')}
                  title="Back"
              />
              {msgError &&
                <div className='errorCreateAppointment'>
                    {msgError}
                </div>}
          </div>
      </Container>
  )
}