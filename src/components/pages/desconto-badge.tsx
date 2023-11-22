import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "../ui/badge";
import { twMerge } from "tailwind-merge";

const DescontoBadge = ({children, className,...props}:BadgeProps) => {
    return ( 
        <Badge 
       className={twMerge (" px-2 py-[2px]", className)}
        {...props}>
        {/* <ArrowDownIcon/> seta para baixo */}
          <ArrowDownIcon size={14}/>{children}%
      </Badge>

     );
}
 
export default DescontoBadge;