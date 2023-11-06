import ProdutoItem from "@/components/pages/produto-item";
import { totalPrecoProduto } from "@/helpers/desconto";
import { Product } from "@prisma/client";

// traz do prisma
interface ListaProdutosProps{
    products:Product[]
}


const ListaProdutos = ({products}:ListaProdutosProps) => {
    return ( 
        // scrool horizontal overflow-x-auto
        // [&::-webkit-scrollbar]:hidden
        <div className="flex w-full gap-4 overflow-x-auto px-5  ">

        {products.map((product) => (
            <div key={product.id} className=" w-[170px] max-w-[170px]">
 <ProdutoItem  product={totalPrecoProduto(product)}/>
            </div>
        )
       

)}
        </div>
     );
}
 
export default ListaProdutos;