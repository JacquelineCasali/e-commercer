import Image from 'next/image'
import Categorias from './components/categorias';
import ListaProdutos from './components/lista-produtos';
import { prismaClient } from '@/lib/prisma';

export default async function Home() {

 const oferta = await prismaClient.product.findMany({
  where:{
    discountPercentage:{
      gt:0,
    },
  },
 });
 
 
 return (  <div >
    <Image
    src="/banner-01.png"
    height={0}
    width={0}
    className="h-auto w-full px-5"
    sizes="100vw"
    alt="Até 55% de desconto"
    />
         
    <div className="mt-8 px-5 ">
<Categorias/>
</div>
<div className="mt-8 " >
<ListaProdutos products={oferta} />
</div>
  </div>);
  

  
}
