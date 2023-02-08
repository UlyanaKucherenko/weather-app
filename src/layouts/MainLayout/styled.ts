import styled from 'styled-components';

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: 100vh;

  @media (max-width: 998px) {
    height: 100%;
  }
`;
export { Wrap };
