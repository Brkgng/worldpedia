import React from 'react';
// Components
import Navbar from '../../components/Navbar/Navbar';
import Circle from '../../components/Circle/Circle';
import Button from '../../components/Button/Button';
// Style
import { Content, Text, Circle3D, World, ButtonWrapper } from './Home.styled';
// Images
import circle3d from '../../assets/circle3d.png';

const Home: React.FC = () => {
  return (
    <>
      <Circle3D src={circle3d} alt="3D Circle" />
      <World />
      <Circle size={150} top={'18%'} left={'33%'} />
      <Circle size={100} top={'32%'} left={'3%'} />
      <Circle size={70} bottom={'27%'} left={'26%'} />
      <Navbar />
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
          <Button primary={true}>Bütün ülkeler</Button>
          <Button primary={false}>Test</Button>
        </ButtonWrapper>
      </Content>
    </>
  );
};

export default Home;
