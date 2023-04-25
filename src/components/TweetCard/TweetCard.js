import {
  Container,
  DataContainer,
  Img,
  ImgContainer,
  Logo,
  Rectangle,
  Avatar,
  Picture,
  AvatarContainer,
  Data,
} from './TweetCard.styled';
import logoSvg from '../../pictures/logo.svg';

export const TweetCard = ({
  name,
  avatar,
  followers,
  tweets,
  following,
  id,
}) => {
  const isFollowing = following.find(user => user.id === id);
  const incrFollowers =
    followers >= 1000 ? ((followers + 1) / 1000).toFixed(3) : followers + 1;
  const prevFollowers =
    followers >= 1000 ? (followers / 1000).toFixed(3) : followers;

  return (
    <Container>
      <Logo src={logoSvg} alt="logo icon" width="76" height="22" />
      <AvatarContainer>
        <Avatar>
          <Picture src={avatar} alt="avatar" />
        </Avatar>
      </AvatarContainer>
      <ImgContainer>
        <Img src={require('pictures/pic.png')} alt="background image" />
      </ImgContainer>
      <Rectangle></Rectangle>
      <DataContainer>
        <Data>
          <b>{name}</b>
          <div>
            <span>{tweets}</span>
            <span> tweets</span>
          </div>
          <div>
            {isFollowing ? (
              <span>{incrFollowers}</span>
            ) : (
              <span>{prevFollowers}</span>
            )}
            <span> followers</span>
          </div>
        </Data>
      </DataContainer>
    </Container>
  );
};
