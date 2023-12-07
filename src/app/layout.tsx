import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/headerefooter/header'
import { AuthProvider } from '@/providers/auth'
import Footer from '@/components/headerefooter/footer'
import CarrinhoProvider from '@/providers/cart'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
  <div className='flex h-full flex-col'>
  
  {/* autenticação google */}
  <AuthProvider>
   
    <CarrinhoProvider>
    <Header/>
  
       {/* antes do children aparece em todas as paginas */}

       {/* pagina inicial children */}
        <div className="flex-1">
        {children}
        </div>
        <Footer/>
        </CarrinhoProvider>
        </AuthProvider>

 </div>
        </body>
    </html>
  )
}
