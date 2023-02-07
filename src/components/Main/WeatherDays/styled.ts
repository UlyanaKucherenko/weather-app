import styled from 'styled-components';

const Wrap = styled.div``

const TabList = styled.ul`
  height: 50px;
  display: flex;
  list-style: none;
  font-size: 18px;
  padding: 0;
  margin: 0;
`

const Tab = styled.li<{ active: boolean }>`
  width: 100%;
  max-width: 144px;
  height: 35px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({active,theme}) => active ? '#4793FF': theme.bgBox};
  color: ${({ active }) => active ? '#ffffff' : ''};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`
export {Wrap, TabList, Tab}