import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import CategoriaItem from "./components/categoria-item";
import { prismaClient } from "@/lib/prisma";

const CatalogoPage = async() => {
// trazendo itemns
    const categorias=await prismaClient.category.findMany({});
    return ( <div className="flex flex-col gap-8 p-5">
        <Badge className="w-fit gap-1 border-2 border-primary uppercase px-3 py-[0.5rem] text-base " variant="outline">
<ShapesIcon/>
Catálogo
  </Badge>
  <div className="grid grid-cols-2 gap-8">
  {categorias.map((category) => (
          <CategoriaItem key={category.id} category={category} />
        ))}
  </div>
    </div> );
}
 
export default CatalogoPage;