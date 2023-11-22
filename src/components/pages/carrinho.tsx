import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { useContext } from "react";
import { CarrinhoContext } from "@/providers/card";
import CarrinhoItem from "./carrinho-item";
import { totalPrecoProduto } from "@/helpers/desconto";

const Carrinho = () => {
// Adicionando produto ao carrinho 
const {products}=useContext(CarrinhoContext)

    return ( 
      <div className="flex flex-col gap-8">
                    <Badge className="w-fit gap-1 border-2 border-primary uppercase px-3 py-[0.5rem] text-base  " variant="outline">
<ShoppingCartIcon  />
Carrinho
  </Badge>
   { /*chamando os pordutos */}
<div className="flex flex-col gap-5">
   {products.map((produto)=>(
<CarrinhoItem key={produto.id} produto={totalPrecoProduto(produto as any)as any}/>
   ))}         
   </div>
          </div>
     );
}
 
export default Carrinho;