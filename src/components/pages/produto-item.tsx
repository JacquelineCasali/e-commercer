import { ProdutoComDesconto } from "@/helpers/desconto";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { ArrowDownIcon } from "lucide-react";
// traz do prisma
interface ListaProdutosProps{
    product:ProdutoComDesconto;
}

const ProdutoItem  = ({product}:ListaProdutosProps) => {
    return (
        <div className="flex flex-col gap-4 max-w-[170px]">
  <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">

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
        <Badge className="absolute left-3 top-3 px-2 py-[2px]">
          {/* <ArrowDownIcon/> seta para baixo */}
            <ArrowDownIcon size={14}/>{product.discountPercentage}%
        </Badge>
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

        );
};
 
export default ProdutoItem ;