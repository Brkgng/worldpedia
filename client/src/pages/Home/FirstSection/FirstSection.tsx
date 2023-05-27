import React from 'react'
// Components
import Button from '../../../components/Button/Button'
import Circle from '../../../components/Circle/Circle'
// Styles
import { Content, Text, Circle3D, World, ButtonWrapper } from './FirstSection.styled'
// Route
import { useNavigate } from 'react-router-dom'

const FirstSection: React.FC = () => {
  let navigate = useNavigate()
  return (
    <>
      <Circle3D />
      <World />
      <Circle size={150} top={'18%'} left={'33%'} />
      <Circle size={100} top={'32%'} left={'3%'} />
      <Circle size={70} bottom={'27%'} left={'26%'} />
      <Content>
        <Text>
          <h1>Dünyayı keşfetmeye hazır mısın?</h1>
          <h3>
            Buradan ülkelerin başkentine, bayrağına, para birimine ve çok daha fazlasına
            ulaşabilirsin.
          </h3>
          <h3>Eğer ben bunları zaten biliyorum diyorsan seni test kısmına alalım. </h3>
        </Text>
        <ButtonWrapper>
          <Button primary={true} onClick={() => navigate('/countries')}>
            Bütün ülkeler
          </Button>
          <Button primary={false} onClick={() => navigate('/quiz')}>
            Test
          </Button>
        </ButtonWrapper>
      </Content>
    </>
  )
}

export default FirstSection
