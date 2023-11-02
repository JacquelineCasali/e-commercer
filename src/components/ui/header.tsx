import { MenuIcon , ShoppingCartIcon, LogInIcon ,PercentIcon , ListOrderedIcon, HomeIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header =()=>{

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
           
      <div className="mt-2 flex flex-col gap-2 ">
 {/* "w-full" toda a largura */}
 <Button variant={"outline"} className="w-full justify-start gap-2">
    <LogInIcon/>
    Fazer Login</Button>

    <Button variant={"outline"} className="w-full justify-start gap-2">
  <HomeIcon  />
    Inicio</Button>  
    <Button variant={"outline"} className="w-full justify-start gap-2">
  <PercentIcon  />
    Ofertas</Button>   
      
    <Button variant={"outline"} className="w-full justify-start gap-2">
  <ListOrderedIcon  />
    Catálogo</Button>  
      
      </div>
       </SheetContent>
   
       </Sheet>
     
    
        <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store</h1>
    
        <Button size="icon" variant="outline">
        <ShoppingCartIcon />
        </Button>
    </Card> 


}
export default Header;
