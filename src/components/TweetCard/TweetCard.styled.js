import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 62px 0 0 0;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  left: 150px;
  top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
`;

export const Avatar = styled.div`
  width: 62px;
  height: 62px;
  background: #5736a3;
  border-radius: 85.9232px;
`;

export const Picture = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 85.9232px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
