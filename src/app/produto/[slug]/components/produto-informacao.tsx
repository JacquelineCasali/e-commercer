"use client";

import DescontoBadge from "@/components/pages/desconto-badge";
import { Button } from "@/components/ui/button";
import { ProdutoComDesconto } from "@/helpers/desconto";
import { CarrinhoContext } from "@/providers/card";
import {  ArrowLeftIcon, ArrowRightIcon,    TruckIcon } from "lucide-react";

import {  useContext, useState } from "react";

interface ProdutoInformacaoProps {
  product: ProdutoComDesconto;
}

const ProdutoInformacao = ({ product }: ProdutoInformacaoProps) => {
 
//  quantidade 
    const [quantidade, setQuantidade] = useState(1);
// adicionando item ao carrinho
 const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);


// quantidade
  const handleDecreaseQuantityClick = () => {
    setQuantidade((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantidade((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    adicionarProdutoCarrinho({ ...product, quantidade });
  };

  return (
    <div className="flex flex-col px-5 lg:w-[68%] lg:rounded-lg lg:bg-accent lg:p-10">
      <h2 className="text-lg lg:text-2xl">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold lg:text-3xl">
          R$ {product.totalPreco.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
   

          <DescontoBadge >
          {product.discountPercentage}
        </DescontoBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75 lg:text-base">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}


{/* quantidade e setas */}
      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantidade}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>
{/* Descrição do produto */}
      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>
{/* Adicionar ao carrinho */}
    

        <Button
        className="mt-8 font-bold uppercase"
         onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>
    
  

{/* tipo de entrega */}
      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2 lg:bg-[#2A2A2A]">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProdutoInformacao;
















