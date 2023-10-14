import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { NextPage } from 'next'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='mt-10' />
      {/* <Trending /> */}
      <div className='mt-20' />
      {/* <CNCtable /> */}
    </div>
  )
}

export default Home
