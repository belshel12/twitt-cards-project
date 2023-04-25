import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 140px 40px 40px 40px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  fontsize: 40;
  color: '#010101';
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 40px 20px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  border-bottom: 1px solid #ececec;
  > nav {
    display: flex;
  }
`;
