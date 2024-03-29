import React from 'react'
// Styles
import { Wrapper, BackgroundImg, Maps, Map } from './SecondSection.styled'
// Images
import America from '../../../assets/maps/America.svg'
import Europe from '../../../assets/maps/Europe.svg'
import Asia from '../../../assets/maps/Asia.svg'
import Africa from '../../../assets/maps/Africa.svg'
import Oceania from '../../../assets/maps/Oceania.svg'
// Route
import { Link } from 'react-router-dom'

const SecondSection: React.FC = () => {
  return (
    <Wrapper>
      <BackgroundImg />
      <h1>Hangi kıtadaki ülkeleri incelemek istersin?</h1>
      <Maps>
        <Link to={'countries'} state={{ region: 'Americas' }}>
          <Map src={America} alt="America" />
        </Link>
        <Link to={'countries'} state={{ region: 'Europe' }}>
          <Map src={Europe} alt="Europe" />
        </Link>
        <Link to={'countries'} state={{ region: 'Asia' }}>
          <Map src={Asia} alt="Asia" />
        </Link>
        <Link to={'countries'} state={{ region: 'Africa' }}>
          <Map src={Africa} alt="Africa" />
        </Link>
        <Link to={'countries'} state={{ region: 'Oceania' }}>
          <Map src={Oceania} alt="Oceania" />
        </Link>
      </Maps>
    </Wrapper>
  )
}

export default SecondSection
