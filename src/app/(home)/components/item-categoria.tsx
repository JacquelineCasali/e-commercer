import { Badge } from "@/components/ui/badge";
import { IconsCategoria } from "@/icons/icons-categoria";
import { Category } from "@prisma/client";
import Link from "next/link";
// traz do prisma
interface CategoryItemProps{
    category:Category
}
const  ItemCategoria = ({category}:CategoryItemProps) => {
  // imagens itens
 
  
  
    return ( 
        <Link href={`/categoria/${category.slug}`}>
    
    <Badge variant="outline" className="py-3 flex items-center justify-center gap-2 rounded-lg
      bg-slate-600">
{IconsCategoria[category.slug as keyof typeof IconsCategoria]}    <span className="text-sm font-bold">{category.name}</span>
    </Badge>
    </Link> );
}
 
export default ItemCategoria ;
