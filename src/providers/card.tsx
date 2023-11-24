"use client";

import { ProdutoComDesconto } from "@/helpers/desconto";
import { ReactNode, createContext, useMemo, useState } from "react";

// armazandando a quantidade de produto
export interface CartProduto extends ProdutoComDesconto{
    quantidade:number
}
interface ICartContext{
    products:CartProduto[];
    totalPreco:number;
    price:number;
    totalDesconto:number;
    total:number;
subtotal:number;
totalcomDesconto:number;
    adicionarProdutoCarrinho:(produto:CartProduto)=>void;
    diminuiraQuantidadeProduto: (produtoId: string) => void;
    aumentaQuantidadeProduto: (produtoId: string) => void;
    removeProdutoCarrinho: (produtoId: string) => void;
    
}

export const CarrinhoContext = createContext<ICartContext>({
    products:[],
    totalPreco:0,
    price:0,
    totalDesconto:0,
    total:0,
    subtotal:0,
    totalcomDesconto:0,
    adicionarProdutoCarrinho:()=>{},
    diminuiraQuantidadeProduto: () => {},
    aumentaQuantidadeProduto:()=>{},
    removeProdutoCarrinho:()=>{},
})
 

const CarrinhoProvider = ({children}:{children:ReactNode}) => {
   const [products,setProducts]=useState<CartProduto[]>([]);
   // claculo do subtotal sem desconto 
const subtotal =useMemo(()=>{
  return products.reduce((acc,produto)=>{
    return acc + Number(produto.basePrice) * produto.quantidade;
  },0); 
},[products])

//total com desconto 
const total =useMemo(()=>{
  return products.reduce((acc,produto)=>{
    return acc + Number(produto.totalPreco * produto.quantidade);
  },0); 
},[products])

const totalcomDesconto=total-subtotal

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
//se a quantidade for 1 deleta o produto
const diminuiraQuantidadeProduto = (produtoId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === produtoId) {
            return {
              ...cartProduct,
              quantidade: cartProduct.quantidade - 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantidade > 0),
    );
  };

  const aumentaQuantidadeProduto = (produtoId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === produtoId) {
            return {
              ...cartProduct,
              quantidade: cartProduct.quantidade + 1,
            };
          }
          return cartProduct;
        })
       
    );
  };


  const removeProdutoCarrinho=(productId: string) => {
        setProducts((prev) =>
          prev.filter((cartProduct) => cartProduct.id !== productId),
        );
  }

    return ( 
        <CarrinhoContext.Provider
        value={{
            products,
          adicionarProdutoCarrinho,
          diminuiraQuantidadeProduto,
          aumentaQuantidadeProduto,
          removeProdutoCarrinho,
          total,
          subtotal,
          totalcomDesconto,
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