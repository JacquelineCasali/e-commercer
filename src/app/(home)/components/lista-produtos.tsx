import ProdutoItem from "@/components/ui/produto-item";
import { Product } from "@prisma/client";

// traz do prisma
interface ListaProdutosProps{
    products:Product[]
}


const ListaProdutos = ({products}:ListaProdutosProps) => {
    return ( 
        // scrool horizontal overflow-x-auto
        <div className="flex w-full gap-4 overflow-x-auto px-5  ">

        {products.map(product => <ProdutoItem key={product.id} product={product}

/>)}
        </div>
     );
}
 
export default ListaProdutos;