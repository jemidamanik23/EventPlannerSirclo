import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {TextInput} from '../components/TextInput/TextInput'
import { CustomButtonPrimary, CustomButtonSecondary } from '../components/CustomButton/CustomButton'
import HomeCard from '../components/HomeCard/HomeCard'
import {EventCard} from '../components/EventCard/EventCard'
import CommentBox from '../components/CommentBox/CommentBox'
import {ParticipantBox, ParticipantNumber} from '../components/ParticipantBox/ParticipantBox'
import client from '../utils/apollo-client'
import { GET_USERS } from '../utils/queries'
import { Users } from '../types/users'
import { useEffect } from 'react'
import Login from './login-page'
import Register from './register'
import HomePage from './home'
import EventHistory from './eventHistory'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'

const Home = ({users}: Users) => {
  // useEffect(()=>{
  //   fetchData();
  // }, [])

  // const fetchData = async() => {
  //   const token = localStorage.getItem("token")
  //   const { data } = await client.query({
  //     query: GET_USERS,
  //     context: {
  //       headers: {
  //         Authorization: token ? `Bearer ${token}` : "",
  //       }
  //     }
  //   })
  //   console.log(data);
  // }

  //console.log(users);
  
  return (
    <div>
      {/* <CommentBox caption='Keren euyy' />

      <TextInput placeholder='Placeholder' value='value' textLabel='Name'/>
      <CustomButtonPrimary width='100%' caption='SIMPAN1'/>
      <CustomButtonSecondary caption='SIMPAN2'/>
      <EventCard eventTitle='Event 1' time='13 Januari 2022' category='Technology'/>
      <HomeCard
                  name='Event 1'
                  image='data:image/jpeg;base64,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'
                  time='13 Januari 2022'


                />

      <ParticipantBox participant='Jemi Damanik'/>
      <ParticipantNumber participantNumber={100}/> 
      <Login/> 
      <Register/> 
      <HomePage/>*/}
      <Header/>
      <Login/>
      <Footer/>
    </div>
    
  )
}

export default Home
