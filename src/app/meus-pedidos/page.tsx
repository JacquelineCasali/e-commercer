import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession, User } from "next-auth";
import Link from "next/link";
import PedidoItem from "./components/pedido-item";

async function MeusPedidos () {
  
  //acesso se tiver logado
   const user:User| null = await getServerSession(authOptions);
   if(!user){
    return <p className="p-12 ml-60 uppercase">Acesso negado. Por Favor Realize Login</p>
   }
   
   const pedidos  =await prismaClient.order.findMany({
      where:{
        userId:(user as any).id 
      },
      include:{
         orderProducts:{
            include:{
               product:true,
            }
         }
      }

   })
   return ( 
        <div className="p-5">
        <Link href={"/"}>
        <Badge className="w-fit gap-2 border-2 border-primary uppercase px-3 py-[0.5rem] text-base  " variant="outline">
<PackageSearchIcon  />
Meus Pedidos
  </Badge>
  </Link>

<div className="flex flex-col gap-5 mt-5">

        {pedidos.map((order) => (
          <PedidoItem key={order.id} pedido={order} />
        ))}
</div>

  </div>
     );
}

export default MeusPedidos ;