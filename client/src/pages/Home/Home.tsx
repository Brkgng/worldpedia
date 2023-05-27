import React from 'react'
// Components
import Navbar from '../../components/Navbar/Navbar'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
    </>
  )
}

export default Home
