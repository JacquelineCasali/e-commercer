// padrao do next
"use client";

import { MenuIcon , ShoppingCartIcon, LogInIcon ,LogOutIcon,PercentIcon , ListOrderedIcon, HomeIcon, PackageSearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { signIn, useSession, signOut } from "next-auth/react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import Carrinho from "../pages/carrinho";
const Header =()=>{
// exibir o botao de fazer o botao de login se o usuario nao estiver logado 
const {status,data}=useSession();

// login
 const handleLoginClick = async ()=>{
  await signIn();
 }
//  logout
 const handleLogOutClick = async ()=>{
  await signOut();
 }

// importa do shadcn/ui
// https://ui.shadcn.com/docs/components/button
    return <Card className="flex items-center justify-between p-[1.875rem]">
      {/* SheetTrigger abrir o menu no botao */}
      
       <Sheet>
        <SheetTrigger asChild>
        <Button size="icon" variant="outline">
            <MenuIcon/>
        </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
            Menu
            </SheetHeader>

    {/* foto  */}
{status === 'authenticated'&& data?.user &&(
  <div className="flex flex-col">
<div className="flex items-center gap-2 py-4">
  <Avatar>
    {/* aparece antes da imagem carregar */}
  <AvatarFallback>
    {data.user.name?.[0].toUpperCase()}
  </AvatarFallback>

  {/* se o usuario tiver foto  */}

{data.user.image &&
  <AvatarImage src={data.user.image}/>
}
  </Avatar>
  <div className="flex flex-col">
  <p className="font-medium">{data.user.name}</p>
  <p className="text-sm opacity-75">Boas Compras !</p>
  </div>
   </div>
  <Separator/>
  </div>
)}
 
{/* login com o google */}
       {/* "w-full" toda a largura */} 
      <div className="mt-4 flex flex-col gap-2 ">
      {status ==="unauthenticated" && (   
 <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
    <LogInIcon/>
    Fazer Login</Button>
)}

{status==="authenticated" &&(   

<Button onClick={handleLogOutClick} variant="outline" className="w-full justify-start gap-2">
   <LogOutIcon/>
   Fazer Logout</Button>
)}

<SheetClose asChild>
<Link href={"/"}>
    <Button variant={"outline"} className="w-full justify-start gap-2">
  <HomeIcon  />
    Inicio</Button>  
    </Link>

</SheetClose>



 {/* para fechar o menu clicando no link SheetClose asChild */}
<SheetClose asChild>
<Link href={"/meus-pedidos"}>
    <Button variant={"outline"} className="w-full justify-start gap-2">
  <PackageSearchIcon  />
    Meus Pedidos</Button>  
    </Link>

</SheetClose>
 
    <SheetClose asChild>
    <Link href={"/ofertas"}>
    <Button variant={"outline"} className="w-full justify-start gap-2">
  <PercentIcon  />
    Ofertas</Button>  
    </Link> 
    </SheetClose>
      

      {/* para fechar o menu clicando no link SheetClose asChild */}
<SheetClose asChild>
      <Link href={"/catalogo"}>
      <Button variant={"outline"} className="w-full justify-start gap-2">
  <ListOrderedIcon  />
    Catálogo</Button>  
      </Link>
      </SheetClose>

      
      </div>
       </SheetContent>
   
       </Sheet>
     
     
       <Link href={"/"}>
        <h1 className="text-lg font-semibold lg:text-lg">
        <span className="text-primary mr-2 xl:text-lg">E-commerce</span>de Informática</h1>
        </Link>
<Sheet>
  <SheetTrigger asChild>

 


        <Button size="icon" variant="outline">
        <ShoppingCartIcon />
        </Button>
        </SheetTrigger>
        <SheetContent >
       <Carrinho/>
        </SheetContent>
        </Sheet>
    </Card> 


}
export default Header;
