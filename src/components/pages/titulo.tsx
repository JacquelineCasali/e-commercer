import { ComponentProps } from "react";

// titulo dinamico
const Titulo  = ({children,...props}:ComponentProps<"p">) => {
    return (  <p className='font-bold uppercase mb-4 pl-5'{...props}>{children}</p> );
}
 
export default Titulo ;