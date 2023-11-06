import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {  HeadphonesIcon,   KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";
// traz do prisma
interface CategoryItemProps{
    category:Category
}
const  ItemCategoria = ({category}:CategoryItemProps) => {
  // imagens itens
  const itemsCategoria={
    keyboards: <KeyboardIcon />,
    monitors:<MonitorIcon/>,
    headphones:<HeadphonesIcon/>,
    mousepads:<SquareIcon/>,
    speakers:<SpeakerIcon/>,
    mouses:<MouseIcon/>,

  }
  
  
    return ( 
    
    <Badge variant="outline" className="py-3 flex items-center justify-center gap-2 rounded-lg">
{itemsCategoria[category.slug as keyof typeof itemsCategoria]}    <span className="text-xs font-bold">{category.name}</span>
    </Badge> );
}
 
export default ItemCategoria ;
