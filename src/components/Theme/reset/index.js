import { css } from 'styled-components';

const Reset = () => css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  :root {
    --scrollbar-width: 5px;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }

  .custom-scroll {
    &::-webkit-scrollbar {
      height: var(--scrollbar-width);
      width: var(--scrollbar-width);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: var(--scrollbar-width);
    }

    &::-webkit-scrollbar-thumb {
      background: #4793ff;
      border-radius: var(--scrollbar-width);
    }
  }
`;

export { Reset };
