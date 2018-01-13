import styled, { keyframes } from 'styled-components';

const scaleText = keyframes`
    0% {
        transform: rotate(-20deg) scale(1.0);
    }
    50% {
        transform: rotate(-5deg) scale(1.5);
    }

    100% {
        transform: rotate(-20deg) scale(1.0);
    }
}
`;

export const GameTitle = styled.span`
  display: block;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 100px;
  color: #133c55;
  animation: ${scaleText} 1.5s linear infinite;
`;
