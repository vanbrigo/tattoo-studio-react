import { useState } from 'react'
import { Input } from '../../common/Input/Input'
import './Register.css'
import { Button } from '../../common/Button/Button'
import { registerUser } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'


export const Register = () => {
    const navigate = useNavigate()

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
    const signIn =() =>{
        registerUser(credenciales)
        .then(
            resultado=> {
            console.log(resultado)
            // navigate("/")
    })
        .catch(error=> console.log(error))
    }
     return (
         <div className="registerDesign">
            <Input
            name={"name"}
            type={"text"}
            style={"registerInput"}
            maxLenght={"30"}
            placeholder={"name"}
            functionProp={functionHandler}
            />
            <Input
            name={"email"}
            type={"email"}
            style={"registerInput"}
            maxLenght={"30"}
            placeholder={"email"}
            functionProp={functionHandler}
            />
            <Input
            name={"password"}
            type={"password"}
            style={"registerInput"}
            maxLenght={"30"}
            placeholder={"password"}
            functionProp={functionHandler}
            />
            <Input
            name={"phone_number"}
            type={"text"}
            style={"registerInput"}
            maxLenght={"10"}
            placeholder={"phone number"}
            functionProp={functionHandler}
            />
            <Button
            style={"loginButton"}
            functionToDo={signIn}
            title={"Sign in"}
            />
         </div>
     )
}