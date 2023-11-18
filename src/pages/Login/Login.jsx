import { useState } from 'react'
import './Login.css'
import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { logUser } from '../../services/apiCalls'
import { validator } from '../../services/validations'
import { useDispatch } from 'react-redux'
import { login } from "../userSlice"
import { Container } from 'react-bootstrap'

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [credenciales,setCredenciales] =useState({
        email:"",
        password:""
    })

    const [credencialesError,setCredencialesError] =useState({
        emailError:"",
        passwordError:""
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

    const logIn =() =>{
        logUser(credenciales)
        .then(
            resultado=> {
                dispatch(login({ credentials: resultado.data }))
            navigate("/")
    })
        .catch(error=> console.log(error))
    }

    return (
        <div className="loginDesign">
            <Container className='loginBox'>
                <div className='loginCredentials'>Email</div>
            <Input
                name={"email"}
                type={"email"}
                style={`loginInputDesign ${credencialesError.emailError !== "" ? 'inputError' : ''}`}
                lenght={"30"}
                placeholder={"email"}
                functionProp={functionHandler}
                functionCheck={errorCheck}
            />
            <div className='errorText'>{credencialesError.emailError}</div>
                <div className='loginCredentials'>Password</div>
            <Input
                name={"password"}
                type={"password"}
                style={`loginInputDesign ${credencialesError.passwordError !== "" ? 'inputError' : ''}`}
                lenght={"30"}
                placeholder={"password"}
                functionProp={functionHandler}
                functionCheck={errorCheck}
            />
            <div className='errorText'>{credencialesError.passwordError}</div>
            <Button
            style={"loginButton"}
            functionToDo={logIn}
            title={"Log in"}
            />
            </Container>
        </div>
    )
}