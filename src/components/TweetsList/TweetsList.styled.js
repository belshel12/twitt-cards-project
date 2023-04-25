import styled from 'styled-components';

export const TweetsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;
  list-style: none;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardBtn = styled.button`
  min-width: 196px;
  padding: 14px 56px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 10.3108px;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.05;
  }
  &:focus {
    scale: 1.05;
  }
`;

export const FollowingBtn = styled.button`
  padding: 14px 56px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: 0;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.05;
  }
  &:focus {
    scale: 1.05;
  }
`;
