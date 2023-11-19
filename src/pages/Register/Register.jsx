import { useEffect, useState } from 'react'
import { Input } from '../../common/Input/Input'
import './Register.css'
import { Button } from '../../common/Button/Button'
import { registerUser } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { validator } from '../../services/validations'
import { useSelector } from 'react-redux'
import { userData } from '../userSlice'
import { Container } from 'react-bootstrap'


export const Register = () => {
    const navigate = useNavigate()
    const rdxCredentials=useSelector(userData)

    const [credenciales,setCredenciales] =useState({
        name:"",
        email:"",
        password:"",
        phone_number:""
    })

    const [credencialesError,setCredencialesError] =useState({
        nameError:"",
        emailError:"",
        passwordError:"",
        phone_numberError:""
    })
    const functionHandler = (e) => {
        setCredenciales((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const errorCheck = (e) => {

        let error = "";
    
        error = validator(e.target.name, e.target.value);
    
        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: error,
        }));
      }
    useEffect(()=>{
        if(rdxCredentials.credentials.token){
            navigate('/')
        }
    },[rdxCredentials])

    const signIn =() =>{
        registerUser(credenciales)
        .then(
            resultado=> {
            console.log(resultado)

    })
        .catch(error=> console.log(error))
    }
     return (
         <Container fluid className="registerDesign">
            <div className='registerName'>REGISTER</div>
            <div className='registerBox'>
            <Input
            name={"name"}
            type={"text"}
            style={`registerInput ${credencialesError.nameError !== "" ? 'inputError' : ''}`}
            maxLenght={"30"}
            placeholder={"name"}
            functionProp={functionHandler}
            functionCheck={errorCheck}
            />
            <div className='errorText'>{credencialesError.nameError}</div>
            <Input
            name={"email"}
            type={"email"}
            style={`registerInput ${credencialesError.emailError !== "" ? 'inputError' : ''}`}
            maxLenght={"30"}
            placeholder={"email"}
            functionProp={functionHandler}
            functionCheck={errorCheck}
            />
            <div className='errorText'>{credencialesError.emailError}</div>
            <Input
            name={"password"}
            type={"password"}
            style={`registerInput ${credencialesError.passwordError !== "" ? 'inputError' : ''}`}
            maxLenght={"30"}
            placeholder={"password"}
            functionProp={functionHandler}
            functionCheck={errorCheck}
            />
            <div className='errorText'>{credencialesError.passwordError}</div>
            <Input
            name={"phone_number"}
            type={"text"}
            style={`registerInput ${credencialesError.phone_numberError !== "" ? 'inputError' : ''}`}
            maxLenght={"15"}
            placeholder={"phone number"}
            functionProp={functionHandler}
            functionCheck={errorCheck}
            />
            <div className='errorText'>{credencialesError.phone_numberError}</div>
            <Button
            style={"loginButton signUpButton"}
            functionToDo={signIn}
            title={"Sign up"}
            />
            </div>
         </Container>
     )
}