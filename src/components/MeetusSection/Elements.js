import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #fff;
  padding: 10px 22px;
  color: #010606;
  border: none;
  padding: 20px 40px; /
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 50px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FFA500; // This is the color code for orange
    color: #010606;
  }
`;
