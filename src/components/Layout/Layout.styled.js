import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  fontsize: 40;
  color: '#010101';
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-bottom: 1px solid #ececec;
  > nav {
    display: flex;
  }
`;
