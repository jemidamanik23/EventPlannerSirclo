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
  
  return (
    <div>
      <HomePage/>
    </div>
    
  )
}

export default Home
