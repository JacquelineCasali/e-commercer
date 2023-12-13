import { totalPrecoProduto } from "@/helpers/desconto";
import { Prisma } from "@prisma/client";
import Image from "next/image";
interface PedidoInformacaoProps {
 // dados do produto
 
 orderProduct: Prisma.OrderProductGetPayload<{
  include: {
    product: true;
  };
}>;
}

const PedidoInformacao = ({ orderProduct }: PedidoInformacaoProps) => {
 const produtoFinal = totalPrecoProduto(orderProduct.product)



  return (
    <div className="relative flex w-full items-center gap-4">

<div className="flex h-[77px] w-[100px] items-center justify-center rounded-lg bg-accent lg:h-[230px] lg:w-[450px]">

      <Image
        src={orderProduct.product.imageUrls[0]}
        height={0}
        width={0}
        sizes="100vw"
         className="h-auto max-h-[90%] w-auto max-w-[120%]  object-contain "
       
      alt={orderProduct.product.name}
      />
  </div>
<div className="flex flex-col  w-full ">
<div className="flex bg-accent px-3 py-1 rounded-md w-fit ">
  <p className="text-[10px] lg:text-xl  ">Vendido e entregue por <span className="font-bold">E-Commercer</span></p>
</div>

  <p className="text-xs py-2 lg:text-xl lg:py-3">{orderProduct.product.name}</p>



<div className="flex items-center  justify-between gap-1 w-full">
<div className="flex items-center gap-1">
 <p className="text-sm font-bold  lg:text-xl">R$ {produtoFinal.totalPreco.toFixed(2) }
 </p>
{/* desconto do produto  */}
{produtoFinal.discountPercentage>0 && (
 
 <p className="line-through opacity-60 text-xs lg:text-[16px] ">R$ {Number(produtoFinal.basePrice).toFixed(2)}</p>

)}
</div>

<p className="opacity-60 text-xs ">Qntd: {orderProduct.quantity }
 </p>


</div>
</div>
    </div>
  );
};

export default PedidoInformacao;
















