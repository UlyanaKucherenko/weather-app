import styled from 'styled-components';
import {theme} from "../../theme";

const Wrap = styled.main`

`
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px;
`
const Row = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  gap: 24px;
  margin-bottom: 50px;
`



export {Wrap, Container,Row}