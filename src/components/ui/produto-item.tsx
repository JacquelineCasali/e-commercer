import { Product } from "@prisma/client";
import Image from "next/image";
// traz do prisma
interface ListaProdutosProps{
    product:Product;
}

const ProdutoItem  = ({product}:ListaProdutosProps) => {
    return (
        <div className="flex flex-col gap-4 max-w-[156px]">
  <div className="flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">

  {/* <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent"> */}
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          alt={product.name}
        />

            </div>
            <div>
                {/* overflow-hidden whitespace-nowrap nao deixa o texto ir para linha de baixo */}
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
            </div>
        </div>

        )
}
 
export default ProdutoItem ;