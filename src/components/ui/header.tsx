import { MenuIcon , ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card"

const Header =()=>{

// importa do shadcn/ui
// https://ui.shadcn.com/docs/components/button
    return <Card className="flex items-center justify-between p-[1.875rem]">
        <Button size="icon" variant="outline">
            <MenuIcon/>
        </Button>
        <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store</h1>
    
        <Button size="icon" variant="outline">
        <ShoppingCartIcon />
        </Button>
    </Card> 


}
export default Header;
