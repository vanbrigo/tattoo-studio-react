import "./Input.css"

export const Input = ({name,type,style,lenght,functionProp}) => {
     return (
         <input
         name={name}
         type={type}
         className={style}
         maxLength={lenght}
         onChange={(e)=>functionProp(e)}
         />
     )
}