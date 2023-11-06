

import { Category } from "@prisma/client";
import Image from "next/image";
// traz do prisma
interface CategoryItemProps{
    category:Category;

}
const CategoriaItem  = ({category}:CategoryItemProps) => {
    return ( <div className="flex flex-col">
     
    {/*  bg-gradient-to-r from-[#5033C3] to-[rgba(80, 51, 195, 0.2)] gradiente */}
       <div className="flex h-[150px] w-full items-center justify-center bg-gradient-to-r from-[#5033C3] to-[rgba(80, 51, 195, 0.2)]
      rounded-tl-lg rounded-tr-lg">
      <Image
        src={category.imageUrl}
        height={0}
        width={0}
        sizes="100vw"
      className="h-auto max-h-[70%] w-auto max-w-[80%]"  
      style={{objectFit:"contain"}}
      alt={category.name}
      />
 </div>
        <div className="rounded-bl-lg rounded-br-lg bg-accent py-3 ">
            <p className="text-sm font-semibold text-center">{category.name}</p>
          
            </div> 
        </div> );
}
 
export default CategoriaItem;