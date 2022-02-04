import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {TextInput2} from '../components/TextInput/TextInput'
import { CustomButtonPrimary, CustomButtonSecondary } from '../components/CustomButton/CustomButton'

const Home: NextPage = () => {
  return (
    <div>
      <TextInput2 placeholder='Placeholder' value='value' textLabel='Name'/>
      <CustomButtonPrimary caption='SIMPAN1'/>
      <CustomButtonSecondary caption='SIMPAN2'/>
    </div>

    
    
  )
}

export default Home
