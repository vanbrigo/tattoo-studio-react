import './HeaderButton.css'
import { useNavigate } from 'react-router-dom';

export const HeaderButton = ({path, title}) => {

     const navigate = useNavigate();

     return (
         <div className="headerButtonDesign" onClick={()=>navigate(path)}>
            {title}
         </div>
     )
}