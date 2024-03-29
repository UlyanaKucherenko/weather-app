import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgBox};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
`;
const WrapImgBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 200px;
  }

  @media (max-width: 400px) {
    max-width: 180px;
  }

  @media (max-width: 370px) {
    max-width: 140px;
  }
`;
const ContentItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const WrapImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
  border-radius: 50%;
  padding: 8px;
  margin-right: 24px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  color: #939cb0;
  margin-right: 24px;
`;
const Text = styled.div``;

export { Wrap, WrapImgBg, WrapImg, Img, ContentItem, Title, Text };
