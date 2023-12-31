import "./InputDate.css"

export const InputDate = ({name,type,style,lenght,placeholder,functionProp}) => {
     return (
         <input
         name={name}
         type={type}
         className={style}
         maxLength={lenght}
         placeholder={placeholder}
         onChange={(e)=>functionProp(e)}
         />
     )
}