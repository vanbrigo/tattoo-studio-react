import { useState } from 'react'
import './Login.css'
import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { logUser } from '../../services/apiCalls'
import { validator } from '../../services/validations'

export const Login = () => {
    const navigate = useNavigate()

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
            console.log(resultado.data.token)
            navigate("/")
    })
        .catch(error=> console.log(error))
    }

    return (
        <div className="loginDesign">
            <div className='loginBox'>
            <Input
                name={"email"}
                type={"email"}
                style={`loginInput ${credencialesError.emailError !== "" ? 'inputError' : ''}`}
                lenght={"30"}
                placeholder={"email"}
                functionProp={functionHandler}
                functionCheck={errorCheck}
            />
            <div className='errorText'>{credencialesError.emailError}</div>
            <Input
                name={"password"}
                type={"password"}
                style={`loginInput ${credencialesError.passwordError !== "" ? 'inputError' : ''}`}
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
            </div>
        </div>
    )
}