import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`


html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: #F8F8F8;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

ul,
ol {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

button{
  cursor: pointer;
  display: inline-block;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
}

a {
    text-decoration: none;
}`;
