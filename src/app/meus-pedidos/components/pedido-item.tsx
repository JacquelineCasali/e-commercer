import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format  } from 'date-fns'
import PedidoInformacao from "./pedido-informacao";
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
    return ( 
  
  <Card className="px-5">
    {/* collapsible abre e fecha */}
<Accordion  type="single" className="w-full" collapsible>

<AccordionItem value={pedido.id}>
    <AccordionTrigger>

<div className="flex flex-col gap-1 text-left lg:text-xl">
    Pedido com {pedido.orderProducts.length} produtos
</div>

    </AccordionTrigger>
    <AccordionContent>
   <div className="flex flex-col gap-4">
   <div className="flex items-center justify-between lg:text-lg">
   <div className="font-bold">
<p>Status</p>
<p className="text-[#8162FF]">{pedido.status}</p>
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




   </div>
    </AccordionContent>
  </AccordionItem>

</Accordion>
  </Card>

    );
}
 
export default PedidoItem;