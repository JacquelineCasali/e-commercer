import Categorias from './components/categorias';
import ListaProdutos from '../../components/pages/lista-produtos';
import { prismaClient } from '@/lib/prisma';
import Titulo from '../../components/pages/titulo';
import PromoBanner from './components/promo-banner';

export default async function Home() {

 const oferta = await prismaClient.product.findMany({
  where:{
    discountPercentage:{
      gt:0,
    },
  },
 });
 
 const ofertateclado = await prismaClient.product.findMany({
  where:{
    category:{
      slug:'keyboards'
    },
  },
 });
 
 const ofertamouse = await prismaClient.product.findMany({
  where:{
    category:{
      slug:'mouses'
    },
  },
 });

 
 return (  <div className="flex flex-col gap-8 py-8  " >
    <PromoBanner
    src="/banner.png"
    alt="Até 55% de desconto"
    />
         
    <div className='px-7 lg:px-16 ' >
<Categorias />
</div>
<div className='px-7  lg:px-28  ' >
<Titulo>Ofertas</Titulo>
 <ListaProdutos products={oferta} />
</div>

{/* banner-mouse  */}
<PromoBanner
    src="/banner-mouses.png"
    alt="Até 55% de desconto em mouse"
    />
<div className='lg:px-28  ' >
  <Titulo>Teclados</Titulo>
<ListaProdutos products={ofertateclado}  />
</div>
{/* banner-fone  */}
<div>
<PromoBanner
    src="/banner-fones.png"
    alt="Até 20% de desconto em fone"
    />
</div>

<div className='lg:px-28 '  >
  <Titulo>Mouses</Titulo>
<ListaProdutos products={ofertamouse} />
</div>


  </div>);
  

  
}
