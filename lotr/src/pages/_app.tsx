import '@/styles/globals.css'
import '../componets/NavbarModule.css'
import '../componets/MainModule.css'
import '../componets/CardList.css'

import './itens.css'
import './locais.css'
import './personagens.css'

import type { AppProps } from 'next/app'
import Navbar from '@/componets/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps}/>
    </>
  ) 
}
