import { ProdutoComDesconto } from "@/helpers/desconto";

import Image from "next/image";

import Link from "next/link";
 import DescontoBadge from "./desconto-badge";
// traz do prisma
interface ListaProdutosProps{
    product:ProdutoComDesconto;
}

const ProdutoItem  = ({product}:ListaProdutosProps) => {
    return (
   
   <Link href={`/produto/${product.slug}`}>
   
   <div className="flex flex-col gap-4  ">
  <div className="relative flex h-[170px] w-full  items-center justify-center rounded-lg bg-accent">

  {/* <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent"> */}
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
        //   className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        className="h-auto max-h-[70%] w-auto max-w-[80%]"  
        style={{objectFit:"contain"}}
        alt={product.name}
        />

           
    {/* desconto  */}

    {product.discountPercentage>0 && (
     <DescontoBadge className="absolute left-3 top-3">
      {product.discountPercentage}
    </DescontoBadge>
    
    )}
            </div>
            <div className="flex flex-col gap-2">
                {/* overflow-hidden whitespace-nowrap nao deixa o texto ir para linha de baixo */}
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
            
            <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap text-ellipsis">
                {/* preco com desconto maior que 0 e  */}
                
                {product.discountPercentage >0 ?(
                    <>
                    <p className="font-semibold ">R$ {product.totalPreco.toFixed(2)}</p>
                    {/* line-through - traço no texto */}
                    {/* toFixed casa decimal */}
                    <p className="line-through opacity-75 text-xs overflow-hidden whitespace-nowrap text-ellipsis">R$ {Number(product.basePrice).toFixed(2)}</p>
                   
                    </>
               ) : (
                // se nao tiver desconto aparece o preco original 
                <p className="truncate text-sm font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                  R$ {product.basePrice.toFixed(2)}
                </p>
              )}               





            </div>

            </div>
        </div>
        </Link>
        );
};
 
export default ProdutoItem ;