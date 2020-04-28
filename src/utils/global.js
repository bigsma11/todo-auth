import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
    --color-main: ${({ theme }) => theme.colors.main};
    --color-mainDark: ${({ theme }) => theme.colors.mainDark};
    --color-mainLight: ${({ theme }) => theme.colors.mainLight};
    --color-text: ${({ theme }) => theme.colors.textColor};
    --color-white: ${({ theme }) => theme.colors.whiteColor};
    --shadow: ${({ theme }) => theme.colors.shadow};

    @media ${({ theme }) => theme.mediaQueries.small} {
      font-size: 60%;
    }

    @media ${({ theme }) => theme.mediaQueries.smallest} {
      font-size: 55%;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }

  a,
  input,
  textarea,
  button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
`
