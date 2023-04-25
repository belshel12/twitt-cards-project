import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  min-width: 196px;
  min-height: 50px;
  padding: 14px 16px 14px 12px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10.3108px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.05;
  }
  &:focus {
    scale: 1.05;
  }
`;
