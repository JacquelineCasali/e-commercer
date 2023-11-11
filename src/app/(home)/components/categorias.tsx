import { prismaClient } from "@/lib/prisma";
import ItemCategoria from "./item-categoria";

const Categorias = async() => {
  // retornar as categorias do banco de dados
  const categorias=await prismaClient.category.findMany({})
  
  
  return ( <div className="grid grid-cols-2 gap-x-4 gap-y-2  lg:px-12 lg:py-2">
{categorias.map((category)=>(
  <ItemCategoria key={category.id} category={category}/>
))}
  </div> );
}
 
export default Categorias;