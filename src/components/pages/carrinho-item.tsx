import { CarrinhoContext, CartProduto } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useContext } from "react";
interface CarrinhoItemProps{
    produto:CartProduto
}

const CarrinhoItem = ({produto}:CarrinhoItemProps) => {
   const {diminuiraQuantidadeProduto,aumentaQuantidadeProduto,
    removeProdutoCarrinho
}=useContext(CarrinhoContext)
// //  diminui a quantidade
  const handleDecreaseProdutoQuantityClick = () => {
    diminuiraQuantidadeProduto(produto.id)
  };
// //  aumenta a quantidade
  const handleaumentaQuantidadeProdutoClick = () => {
    aumentaQuantidadeProduto(produto.id)
  };

  //deleta
const handleremoveProdutoCarrinhoClick=()=>{
    removeProdutoCarrinho(produto.id)
}


   
   
   
   
    return ( 
        <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                {/*parte direita foto e nome  */}
                <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent lg:h-[120px] lg:w-[120px]">
 <Image

        src={produto.imageUrls[0]}
        height={0}
        width={0}
        sizes="100vw"
      className="h-auto max-h-[70%] w-auto max-w-[80%]"  
      style={{objectFit:"contain"}}
      alt={produto.name}
      />


</div>
<div className="flex flex-col">
    <p className="text-xs lg:text-sm">{produto.name}</p>

<div className="flex items-center gap-2">
<p className="text-sm font-bold lg:text-base">
        
        R${produto.totalPreco.toFixed(2)}</p>
{produto.discountPercentage>0 &&(
     <p className="text-xs line-through opacity-75 lg:text-sm">
    R${Number(produto.basePrice).toFixed(2)}</p>
)}

</div>
{/* quantidade e setas */}
<div className="flex items-center gap-1 lg:gap-3">
        <Button
        className="h-8 w-8"
          size="icon"
          variant="outline"
         onClick={handleDecreaseProdutoQuantityClick}
        >
        <ArrowLeftIcon size={16} />
        </Button>

        <span className="text-xs ml-2 mr-2 lg:text-sm">{produto.quantidade}</span>

        <Button
          className="h-8 w-8"
         size="icon"
          variant="outline"
          onClick={handleaumentaQuantidadeProdutoClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>
      </div>
            </div>
          {/* parte esquerda botao deletar */}   
            <Button size={'icon'} variant={"outline"} onClick={handleremoveProdutoCarrinhoClick}>
   <TrashIcon />
            </Button>
        </div>
     );
}
 
export default CarrinhoItem;