import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'
import ReduxProvider from '@/store/provider'

const inter = Inter({ subsets: ['latin'] })
// const lora = Lora({ weight: ['400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar/>
            <div className="section-padding children-component">
              {children}
            </div>
          <Footer/>
        </ReduxProvider>

      </body>
    </html>
  )
}
