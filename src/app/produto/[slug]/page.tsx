import { prismaClient } from "@/lib/prisma";
import ProdutoImagem from "./components/produto-imagem";
import { totalPrecoProduto } from "@/helpers/desconto";
import ProdutoInformacao from "./components/produto-informacao";
import ListaProdutos from "@/components/pages/lista-produtos";



interface PaginadeDetalheProdutoProps{
  params:{
      
    slug:string
  },
}

const PaginadeDetalheProduto = async ({params:{slug}}:PaginadeDetalheProdutoProps) => {
// chamando o banco 
const produto=await prismaClient.product.findFirst({
    
        where: {
            slug: slug,
          },
          include:{
            category:{
              include:{
              //  não aparece na lista de baixo o produto selecionado
               
                products:{
                  where:{
                    slug:{
                      not:slug
                    }
                  }
                }
              }
            }
          }
              });

      // console.log({produto});
        //  não tiver produto retorna nulo      
              if(!produto)return null;
    return ( 

      // lg:container lg:mx-auto lg:gap-10 lg:py-10
      <div className="flex flex-col gap-8 pb-8  lg:container lg:mx-auto lg:gap-10 lg:py-10">
      <div className="flex flex-col gap-8 lg:flex-col lg:gap-9 ">
<ProdutoImagem imageUrls={produto.imageUrls} name={produto.name}/>
<ProdutoInformacao product={totalPrecoProduto(produto)}/>
 <ListaProdutos products={produto.category.products}/>
 
      </div>
      </div>
           );
}
 
export default PaginadeDetalheProduto;
