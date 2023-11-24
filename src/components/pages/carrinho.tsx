import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { useContext } from "react";
import { CarrinhoContext } from "@/providers/card";
import CarrinhoItem from "./carrinho-item";
import { totalPrecoProduto } from "@/helpers/desconto";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";


const Carrinho = () => {
// Adicionando produto ao carrinho 
const {products,subtotal,total,totalcomDesconto}=useContext(CarrinhoContext)

    return ( 
      <div className="flex flex-col gap-8 h-full">
                    <Badge className="w-fit gap-1 border-2 border-primary uppercase px-3 py-[0.5rem] text-base  " variant="outline">
<ShoppingCartIcon  />
Carrinho
  </Badge>
   { /*chamando os pordutos */}
<div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
  <ScrollArea className="h-full">
 <div className="flex h-full flex-col gap-8">
   {products.length>0 ?(
    products.map((produto)=>(
 <CarrinhoItem key={produto.id}
  produto={totalPrecoProduto(produto as any)as any}/>
    ))):(
      <p>Carrinho vazio</p>
   )}   
   </div>
   </ScrollArea>      
   </div>
      <div className=" flex flex-col gap-3">
      <Separator/>
         <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
         </div>
         <Separator/>
         <div className="flex items-center justify-between text-xs ">
            <p>Desconto</p>
            <p>R$ {totalcomDesconto.toFixed(2)}</p>
         </div>
         <Separator/>
         <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
         </div>
          <Button className="uppercase font-bold mt-7">
            Finalizar Compra
          </Button>
          
         </div>
          </div>

     );
}
 
export default Carrinho;