import { Avatar, AvatarContainer } from './CardAvatar.styled';

export const CardAvatar = () => {
  return (
    <AvatarContainer>
      <Avatar>
        <img src={require('pictures/Hansel.png')} alt="avatar"/>
      </Avatar>
    </AvatarContainer>
  );
};
