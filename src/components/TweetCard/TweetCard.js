import { CardButton } from 'components/CardButton/CardButton';
import { CardData } from 'components/CardData/CardData';
import {
  Container,
  DataContainer,
  Img,
  ImgContainer,
  Logo,
  Rectangle,
} from './TweetCard.styled';

import logoSvg from '../../pictures/logo.svg';
import { CardAvatar } from 'components/CardAvatar/CardAvatar';

export const TweetCard = () => {
  return (
    <Container>
		<Logo src={logoSvg}  alt="logo icon" width="76" height="22" />
		<CardAvatar/>
      <ImgContainer>
        <Img src={require('pictures/pic.png')}  alt="background image"/>
      </ImgContainer>
      <Rectangle></Rectangle>
      <DataContainer>
        <CardData />
        <CardButton />
      </DataContainer>
    </Container>
  );
};
