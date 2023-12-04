"use server"
import {CartProduto} from "@/providers/card"
import Stripe from "stripe"
 export const criarPagamento =async (products:CartProduto[]) => {
//Criar o pagamento 
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion:"2023-10-16",
})
//retornar o pagamento 

const pagamento= await stripe.checkout.sessions.create({
    payment_method_types:['card'],
    mode:'payment',
    success_url:process.env.HOST_URL,
    //success_url:"http://localhost:3000",
  
    cancel_url:process.env.HOST_URL,
    
    //cancel_url:"http://localhost:3000",
    // metadata:{
    //   products:JSON.stringify(products)
    // },
  //definindo o produto
    line_items:products.map(produto=>{
        return{
            price_data:{
                currency:'brl',
                product_data:{
                    name:produto.name,
                    description:produto.description,
                    images:produto.imageUrls,
                },
          
     //dados dos preços     
                unit_amount:produto.totalPreco*100,
            },
              //quantidade de produto
            quantity:produto.quantidade,
        }
    })
})
  return pagamento
}
 
