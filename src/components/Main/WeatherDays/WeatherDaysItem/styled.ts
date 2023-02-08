import styled from 'styled-components';

const Wrap = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.bgSmallBox};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 10px;
  margin: 0 5px;
  min-width: 150px;
  width: 100%;
  min-height: 200px;
`;
const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const WrapImg = styled.div`
  width: 48px;
  height: 48px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
const Text = styled.div`
  margin-bottom: 14px;
  font-size: 13px;
  line-height: 16px;
  color: #939cb0;

  &:last-child {
    margin-bottom: 0;
  }
`;
const IconText = styled.div`
  font-size: 13px;
  font-style: italic;
  margin-left: 8px;
`;

export { Wrap, WrapIcon, WrapImg, Img, Title, Text, IconText };
