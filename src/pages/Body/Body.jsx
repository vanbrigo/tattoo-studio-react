import { Routes,Route} from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { NewAppointment } from "../NewAppointment/NewAppointment";
import { TattooArtistAppointments } from "../TattooArtistAppointments/TattooArtistAppointments";
import { UserAppointments } from "../UserAppointments/UserAppointments";
import { Profile } from "../Profile/Profile";
import { Gallery } from "../Gallery/Gallery";

export const Body = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/create-appointment" element={<NewAppointment />}/>
            <Route path="/my-schedule" element={<TattooArtistAppointments />}/>
            <Route path="/my-appointments" element={<UserAppointments />}/>
            <Route path="/profile" element={<Profile />}/> 
            <Route path="/gallery" element={<Gallery />}/> 
        </Routes>
        </>
    )
}