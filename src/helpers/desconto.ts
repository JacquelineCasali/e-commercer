import { Product } from "@prisma/client";
export interface ProdutoComDesconto extends Product {
    totalPreco:number;
}
export const totalPrecoProduto = (product:Product ):ProdutoComDesconto => {
// se o produto com descotno for igual a 0 preço base se nao preco com desconto 
    if(product.discountPercentage===0){
    return{
        ...product,
        totalPreco:Number(product.basePrice),
    };
}
const totalDesconto= Number(product.basePrice)* (product.discountPercentage /100);
return {
    ...product,
    totalPreco:Number(product.basePrice)-totalDesconto,
}
}
 
