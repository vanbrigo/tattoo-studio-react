import "./Header.css"
import { HeaderButton } from '../HeaderButton/HeaderButton'
import { useSelector, useDispatch } from "react-redux";
import { logout, userData } from "../../pages/userSlice";
import {jwtDecode} from 'jwt-decode'


export const Header = () => {
    const dispatch = useDispatch();
    const rdxCredentials = useSelector(userData);
    let tokenDecoded={}
    if (rdxCredentials.credentials.token){
      tokenDecoded = jwtDecode(rdxCredentials.credentials.token)
    }
    const logOutMe = () => {
  
      dispatch(logout( {credentials : ""}))
    }
    
    return (
        <div className='headerDesign'>
           <div className='logoHeaderDesign'></div>
           {tokenDecoded.role=='super_admin' 
           ?(
           <div className='routesHeader'>
            <HeaderButton
           path={"/all-users"} 
           title="Users"
           />
           <HeaderButton
           path={"/all-tattooArtist"} 
           title="Tattoo Artist"
           />
           <HeaderButton
           path={"/all-appointments-available"} 
           title="Appointments available"
           />
           <HeaderButton
           path={"/all-appointments-taken"} 
           title="Appointments booked"
           />
           <div onClick={logOutMe}>
            <HeaderButton 
            path={"/"} 
            title={"log out"} 
            />  
            </div>
           </div>) 
           :(
            <div className='routesHeader'>
           <HeaderButton
           path={"/"} 
           title="Home"
           />
           <HeaderButton
           path={"/gallery"} 
           title="Gallery"
           />
           {!rdxCredentials?.credentials.token ? (
            <>
           <HeaderButton
           path={"/login"} 
           title="Log in"
           />
           <HeaderButton
           path={"/register"} 
           title="Sign in"
           />
           </>):(
            <>
            <HeaderButton
           path={"/profile"} 
           title={`Hi, ${rdxCredentials.credentials.data}`}
           />
            <HeaderButton
           path={tokenDecoded.role ==='user'?("/my-appointments"):("/my-schedule")} 
           title={"My appointments"}
           />
           <div onClick={logOutMe}>
            <HeaderButton 
            path={"/"} 
            title={"log out"} 
            />  
            </div>
          </>
          )}
            </div>

           )}
           
           
        </div>
    )
}