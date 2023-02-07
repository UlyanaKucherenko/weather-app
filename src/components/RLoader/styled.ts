import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
  0% {
    margin-bottom: 0;
  }
  50% {
    margin-bottom: 15px
  }
  100% {
    margin-bottom: 0
  }
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 50px;
`;

const Text = styled.div`
  font-size: 24px;
`;

const Dot = styled.div<{ delay: string }>`
  background-color: ${({ theme }) => theme.text};
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => delay};
`;

export { DotWrapper, Dot, Text };
