import { OrderStatus } from "@prisma/client";

export const getNeusPedidosStatus=(pedidosStatus:OrderStatus)=>{
    return {
        [OrderStatus.PAYMENT_CONFIRMED]: "Pago",
        [OrderStatus.WAITING_FOR_PAYMENT]: "Aguardando Pagamanto",
      }[pedidosStatus];
}
