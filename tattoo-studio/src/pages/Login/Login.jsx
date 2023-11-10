import { useState } from 'react'
import './Login.css'
import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { logUser } from '../../services/apiCalls'


export const Login = () => {
    const navigate = useNavigate()

    const [credenciales,setCredenciales] =useState({
        email:"",
        password:""
    })

    
    const functionHandler = (e) => {
        setCredenciales((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
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
            <Input
                name={"email"}
                type={"email"}
                style={"loginInput"}
                lenght={"30"}
                placeholder={"email"}
                functionProp={functionHandler}
            />
            <Input
                name={"password"}
                type={"password"}
                style={"loginInput"}
                lenght={"30"}
                placeholder={"password"}
                functionProp={functionHandler}
            />
            <Button
            style={"loginButton"}
            functionToDo={logIn}
            title={"Log in"}
            />
        </div>
    )
}