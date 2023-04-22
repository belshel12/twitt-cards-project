import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const ImgContainer = styled.div`
  width: 308px;
  height: 168px;
  padding: 28px 36px 18px 36px;
`;

export const Img = styled.img`
  background-size: cover;
  width: 308px;
  height: 168px;
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 0 36px 0;
`;
