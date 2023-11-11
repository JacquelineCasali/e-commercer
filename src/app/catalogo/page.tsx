import { Badge } from "@/components/ui/badge";
import { ListOrderedIcon } from "lucide-react";
import CategoriaItem from "./components/categoria-item";
import { prismaClient } from "@/lib/prisma";
import Link from "next/link";

const CatalogoPage = async() => {
// trazendo itemns
    const categorias=await prismaClient.category.findMany({});
    return ( <div className="flex flex-col gap-8 p-5 lg:container 
    ">
   
   <Link href={"/"}>
        <Badge className="w-fit gap-1 border-2 border-primary uppercase px-3 py-[0.5rem] text-base  " variant="outline">
{/* <ShapesIcon/> */}
<ListOrderedIcon  />
Catálogo
  </Badge>
  </Link>



  <div className="grid grid-cols-2 gap-8">
  {categorias.map((category) => (
          <CategoriaItem key={category.id} category={category} />
        ))}
  </div>
    </div> );
}
 
export default CatalogoPage;