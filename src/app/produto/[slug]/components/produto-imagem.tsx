"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// traz do prisma
interface  ProdutoImagemProps{
    name: string;
    imageUrls: string[];

}
const ProdutoImagem  = ({imageUrls, name}:ProdutoImagemProps) => {
    //  colocando roxo nas imagens quando seleciona
    const [imagemAtual, definirImagem]=useState(imageUrls[0]);
    const handleImageClick = (imageUrl: string) => {
        definirImagem(imageUrl);
      };
    
    return ( 
    
    // <Link href={`/categoria/${imageUrls.slug}`}>
    // lg:px-4
    // lg:w-3/5
   <div className="flex-col flex lg:min-h-full lg:w-[68%] ">
    <div className="flex h-[380px] w-full items-center justify-center flex-col bg-accent  lg:h-full lg:rounded-lg ">
     
       <Image
        src={imagemAtual}
        height={0}
        width={0}
        sizes="100vw"
      className="h-auto max-h-[70%] w-auto max-w-[80%]"  
      style={{objectFit:"contain"}}
      alt={name}
      />
 </div>

{/* botoes com as imagens */}
<div className="mt-8 px-5 grid grid-cols-4 gap-4 lg:px-0">
{imageUrls.map((imageUrl)=>(
    <button key={imageUrl}
     className={`flex h-[100px] items-center justify-center bg-accent rounded-lg  
       ${
imageUrl===imagemAtual && "border-2 border-solid border-primary"
     }
     `}

     onClick={()=>handleImageClick(imageUrl)}
     >
   
   <Image
           src={imageUrl}
           height={0}
           width={0}
           sizes="100vw"
         className="h-auto max-h-[70%] w-auto max-w-[80%]"  
         style={{objectFit:"contain"}}
         alt={name}
         />
    </button>
   
))}


</div>

        </div>
        // </Link>
         );
}
 
export default ProdutoImagem;