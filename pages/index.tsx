import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {TextInput} from '../components/TextInput/TextInput'

const Home: NextPage = () => {
  return (
    <div>
      <TextInput/>
    </div>
    
  )
}

export default Home
