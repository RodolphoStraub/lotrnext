import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main2 from '@/componets/Main2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lord of The Rings</title>
      </Head>
      <Main2/>
      
    </div>
  )
}
