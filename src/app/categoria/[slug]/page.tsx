import { prismaClient } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import ProdutoItem from "@/components/pages/produto-item";
import { totalPrecoProduto } from "@/helpers/desconto";
import { IconsCategoria } from "@/icons/icons-categoria";
import Link from "next/link";
const CategoriaProdutos = async ({params}:any) => {
// chamando o banco 
const categoria=await prismaClient.category.findFirst({
    where:{
      
          slug:params.slug,
        },
        include: {
            products: true,
          },
              });
              
              if (!categoria) {
                return null;
              }


    return ( 
        <div className="flex flex-col gap-8 p-5 lg:px-16">
      <Link href="/">
     
         <Badge className="w-fit gap-1 border-2 border-primary uppercase px-3 py-[0.5rem] text-base " variant="outline">
{IconsCategoria [params.slug as keyof typeof IconsCategoria]}
{categoria.name}
  </Badge>
  </Link>
  <div className="grid grid-cols-2 gap-8">
  {categoria.products.map((product) => (
          <ProdutoItem key={product.id} product={totalPrecoProduto(product)} />
        ))}
  </div>
       </div> 
     );
}
 
export default CategoriaProdutos;
