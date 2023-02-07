import styled from 'styled-components';

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  min-height: 600px;
  height: 100%;
`;
export { Wrap };
