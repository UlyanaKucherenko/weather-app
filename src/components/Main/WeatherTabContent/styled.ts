import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.bgBox};
  border-radius: 0 0 20px 20px;
  overflow-x: scroll;
  width: 100%;
`;

export { Wrap };
