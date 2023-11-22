"use client";

import { ProdutoComDesconto } from "@/helpers/desconto";
import { ReactNode, createContext, useState } from "react";

// armazandando a quantidade de produto
export interface CartProduto extends ProdutoComDesconto{
    quantidade:number
}
interface ICartContext{
    products:CartProduto[];
    totalPreco:number;
    price:number;
    totalDesconto:number;
    adicionarProdutoCarrinho:(produto:CartProduto)=>void;
}

export const CarrinhoContext = createContext<ICartContext>({
    products:[],
    totalPreco:0,
    price:0,
    totalDesconto:0,
    adicionarProdutoCarrinho:()=>{},

})
 

const CarrinhoProvider = ({children}:{children:ReactNode}) => {
   const [products,setProducts]=useState<CartProduto[]>([]);
   
//    adiciona ao carrinho 
   const adicionarProdutoCarrinho= (produto:CartProduto)=>{
// se o produto já estiver no carrinho apenas aumentar a quantidade 
const produtoAdicionadoCarrinho = products.some(
    (cartProduct) => cartProduct.id === produto.id,
  );
  if (produtoAdicionadoCarrinho) {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === produto.id) {
          return {
            ...cartProduct,
            quantidade: cartProduct.quantidade + produto.quantidade,
          };
        }
        return cartProduct;
      }),
    );
    return;
  }
// se não adicionar o produto na lista do carrinho
   setProducts((prev)=>[...prev,produto]);

};
    return ( 
        <CarrinhoContext.Provider
        value={{
            products,
            adicionarProdutoCarrinho,
            totalPreco:0,
            price:0,
            totalDesconto:0,
        }}
        
        >
{children}
        </CarrinhoContext.Provider>
     );
}
 
export default CarrinhoProvider;