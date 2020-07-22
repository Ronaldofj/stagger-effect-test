import styled from 'styled-components';

const Button = styled.button`
  background-color: #c70039;
  border: none;

  padding: 10px 20px;
  margin: 10px 0;
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: 0.2s;
  border-radius: 5px;

  &:active {
    opacity: 0.5;
  }
`;

export default Button;
