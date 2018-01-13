import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button.attrs({
  children: ({ option }) => String(option),
})`
  padding: 10px 20px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ option }) => (option ? '#00A676' : '#8b1e3f')};
  color: #fff;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
`;

Button.propTypes = {
  option: PropTypes.bool.isRequired,
};
