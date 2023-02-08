import styled from 'styled-components';

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  max-height: 100vh;
  height: 100%;

  @media (max-width: 998px) {
    max-height: 100%;
  }
`;
export { Wrap };
