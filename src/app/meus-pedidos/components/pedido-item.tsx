import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format  } from 'date-fns'
import PedidoInformacao from "./pedido-informacao";
import { Separator } from "@/components/ui/separator";
import { useMemo } from "react";
import { totalPrecoProduto } from "@/helpers/desconto";
import { getNeusPedidosStatus } from "../helpers/status";
// traz do prisma
interface PedidoItemProps{
    pedido:Prisma.OrderGetPayload<{
      include:{
        orderProducts:{
            include: { product: true };
        }
      }  
    }>;

}
const PedidoItem  = ({pedido}:PedidoItemProps) => {
// calculo subtotal
const subtotal = useMemo(() => {
  return pedido.orderProducts.reduce((acc, meuspedidos) => {
    return (
      acc + Number(meuspedidos.product.basePrice) * meuspedidos.quantity
    );
  }, 0);
}, [pedido.orderProducts]);

// calculo total
const total = useMemo(() => {
  return pedido.orderProducts.reduce((acc, orderProduct) => {
    const productWithTotalPrice = totalPrecoProduto(
      orderProduct.product,
    );
    return acc + productWithTotalPrice.totalPreco * orderProduct.quantity;
  }, 0);
}, [pedido]);



const desconto = subtotal - total;

  return ( 
  
  <Card className="px-5">
    {/* collapsible abre e fecha */}
<Accordion  type="single" className="w-full" collapsible>

<AccordionItem value={pedido.id}>
    <AccordionTrigger>

<div className="flex flex-col gap-1 text-left lg:text-xl">
  <p>Pedido com {pedido.orderProducts.length} produtos</p>
  
   <span className="text-sm opacity-60">
   Feito em {format(pedido.createdAt,"d/MM/y 'as'  HH:mm")}

    </span> 
</div>

    </AccordionTrigger>
    <AccordionContent>
   <div className="flex flex-col gap-4">
   <div className="flex items-center justify-between lg:text-lg">
   <div className="font-bold">
<p>Status</p>
<p className="text-[#8162FF]">{getNeusPedidosStatus(pedido.status)}</p>
   </div>
   <div>
<p className="font-bold">Data</p>
<p className="opacity-60">{format(pedido.createdAt,"d/MM/y")}</p>
   </div>
   <div>
<p className="font-bold">Pagamento</p>
<p className="opacity-60">Cartão</p>
   </div> 

   </div>

   {pedido.orderProducts.map((orderProduct) => (
                <PedidoInformacao
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}

<div className="flex flex-col gap-1 w-full text-xs">
  <Separator/>
<div className="flex w-full justify-between py-3">
 <p>Subtotal</p>
 <p>R$ {subtotal.toFixed(2)}</p>
</div>

 <Separator/>
<div className="flex w-full justify-between py-3">
  <p>Entrega</p>
  <p>Gratis</p>
</div>
<Separator/>
<div className="flex w-full justify-between py-3">
<p>Desconto</p>
 <p>R$ {desconto.toFixed(2)}</p>
</div>
 <Separator/>
<div className="flex w-full justify-between py-3 text-sm font-bold">
<p>Total</p>

 <p>R${total.toFixed(2)}</p>
</div>

</div>


   </div>
    </AccordionContent>
  </AccordionItem>

</Accordion>
  </Card>

    );
}
 
export default PedidoItem;