import styled from "styled-components";

export const GoBackBtn = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 4px 12px 4px 8px;
  font-weight: 700;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: #f5f4fa;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    background-color: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
