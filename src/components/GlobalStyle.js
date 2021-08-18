import { createGlobalStyle } from 'styled-components';
import { darkColor } from '../styles';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${darkColor};
}
`;

export default GlobalStyle;
