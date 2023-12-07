import ProdutoItem from "@/components/pages/produto-item";
import { totalPrecoProduto } from "@/helpers/desconto";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
const PaginadeOfertas =async () => {
    const oferta = await prismaClient.product.findMany({
        where:{
          discountPercentage:{
            gt:0,
          },
        },
       });
       return(
       
       <div className="flex flex-col gap-5 p-5">
 
 <Link href={"/"}>
 
  <Badge className="w-fit gap-1 border-2 border-primary uppercase px-3 py-[0.5rem] text-base  " variant="outline">

<PercentIcon  />
Ofertas
  </Badge>
  </Link>
     
       
       <div className="grid grid-cols-2 gap-8">
        {oferta.map((product) => (
          <ProdutoItem
            key={product.id}
            product={totalPrecoProduto(product)}
          />
        ))}
      </div>
      </div>
       )
}
 
export default PaginadeOfertas;