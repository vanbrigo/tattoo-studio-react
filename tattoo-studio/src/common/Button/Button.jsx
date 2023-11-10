import "./Button.css"

export const Button = ({style,functionToDo,title}) => {
     return (
         <div 
         className={style} 
         onClick={()=>functionToDo()}>
         {title}
         </div>
     )
}