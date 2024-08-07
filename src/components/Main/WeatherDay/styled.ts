import styled from 'styled-components';

const Wrap = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.bgBox};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
`;

const ContentTop = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 24px;
`;

const WrapImg = styled.div`
  width: 100px;
  height: 100px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Degree = styled.div`
  font-weight: 500;
  font-size: 96px;
  line-height: 117px;
  color: #4793ff;
`;
const Day = styled.div`
  font-size: 40px;
  line-height: 49px;
`;
const Text = styled.div`
  font-size: 25px;
  line-height: 30px;
  color: #939cb0;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Descr = styled.div`
  font-size: 18px;
  font-style: italic;
  text-align: center;
`;

export { Wrap, WrapImg, Img, ContentTop, Degree, Day, Text, Descr };
