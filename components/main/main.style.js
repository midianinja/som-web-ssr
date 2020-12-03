import styled from 'styled-components';

export const resets = `
  *{
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: none;
  }
  
  html, body, header, main, nav, footer, article, blockquote, 
  div, section, span, iframe, img, video, figure, a, p, h1, h2,
  h3, h4, h5, h6, strong, b, i, ul, ol, li, form, fieldset,
  label, input, input:focus, select, select:focus, textarea, textarea:focus, table, button, thead, tbody, tfoot,
  th, td, tr, aside, caption, sup, sub, q, small {
    padding: 0;
    margin: 0;
    border: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  input:focus, select:focus, textarea:focus{
    outline: none;
    shadow-box: none;
  }
  
  body {
    font-size: 14px;
    line-height: 1em;
  }
  
  body.-scroll-blocked {
    overflow: hidden;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote {
    quotes: none;
  }
  
  blockquote:after, blockquote:before {
    content: "";
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  @media (min-width: 769px) {
    body {
      font-size: 16px;
    }
  }
`;

export const MainWrapper = styled.main`
  min-height: 100vh;
`;
