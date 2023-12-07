"use server";
import { prismaClient } from "@/lib/prisma";
import { CartProduto } from "@/providers/cart";


export const criarOrder =async (cartProducts:CartProduto[], 
    userId: string, ) => {
     
    const order = await prismaClient.order.create({
        data: {
          userId,
          status: "WAITING_FOR_PAYMENT",
          orderProducts: {
            createMany: {
              data: cartProducts.map((product) => ({
                basePrice: product.basePrice,
                discountPercentage: product.discountPercentage,
                productId: product.id,
                quantity: product.quantidade,
              })),
            },
          },
        },
      });
    
      return order;
    };