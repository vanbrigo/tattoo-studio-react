import { Routes,Route, Navigate} from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { NewAppointment } from "../NewAppointment/NewAppointment";
import { TattooArtistAppointments } from "../TattooArtistAppointments/TattooArtistAppointments";
import { UserAppointments } from "../UserAppointments/UserAppointments";
import { Profile } from "../Profile/Profile";
import { Gallery } from "../Gallery/Gallery";
import { AppointmentsAvailable } from "../AppointmentsAvailable/AppointmentsAvailable";
import { CreateProfile } from "../CreateProfile/CreateProfile";
import { TakeAppointment } from "../TakeAppointment/TakeAppointment";
import { AllUsers } from "../AllUsers/AllUsers";

export const Body = () =>{
    return(
        <>
        <Routes>
            <Route path="*" element={<Navigate to='/'/>}/>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/create-appointment" element={<NewAppointment />}/>
            <Route path="/my-schedule" element={<TattooArtistAppointments />}/>
            <Route path="/my-appointments" element={<UserAppointments />}/>
            <Route path="/profile" element={<Profile />}/> 
            <Route path="/gallery" element={<Gallery />}/> 
            <Route path="/all-appointments-available" element={<AppointmentsAvailable/>}/> 
            <Route path="/create-profile" element={<CreateProfile />}/> 
            <Route path="/take-appointment" element={<TakeAppointment />}/>
            <Route path="/all-users" element={<AllUsers />}/>
        </Routes>
        </>
    )
}