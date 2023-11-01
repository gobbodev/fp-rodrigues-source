import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

.title{
  position: relative;
  padding-bottom:21px;
  color: ${(props) => props.theme.lightBlue};

  &::after {
     content: "";
     display: block;
     position: absolute;
     bottom: 0;
     height: 5px;
     background-color: ${(props) => props.theme.lightBlue};
     width: 14%; 
  }

  @media only screen and (max-width: 800px){
    padding-bottom:15px;
    &::after{height: 3px;}
  }
  @media only screen and (max-width: 600px){
    padding-bottom:10px;
    &::after{height: 3px;}
  }
  @media only screen and (max-width: 400px){
    padding-bottom:6px;
  }
}
      
.margin-b-30{
  margin-bottom:30px;
  @media only screen and (max-width: 1600px) {
    margin-bottom:27px;
  }
  @media only screen and (max-width: 1400px) {
    margin-bottom:24px;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom:20px;
  }
  @media only screen and (max-width: 800px) {
    margin-bottom:18px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom:16px;
  }
  @media only screen and (max-width: 400px) {
    margin-bottom:14px;
  }
}

.margin-b-10{
  margin-bottom:10px;
  
  @media only screen and (max-width: 1400px) {
    margin-bottom:9px;
  }
  @media only screen and (max-width: 1200px) {
    margin-bottom:8px;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom:7px;
  }
}

.section-pad{
  padding-top:95px;
  padding-bottom:95px;
  @media only screen and (max-width: 1600px) {
    padding-top:90px;
    padding-bottom:90px;
  }
  @media only screen and (max-width: 1400px) {
    padding-top:85px;
    padding-bottom:85px;
  }
  @media only screen and (max-width: 1200px) {
    padding-top:60px;
    padding-bottom:60px;
  }
  @media only screen and (max-width: 1000px) {
    padding-top:50px;
    padding-bottom:50px;
  }
  @media only screen and (max-width: 600px) {
    padding-top:40px;
    padding-bottom:40px;
  }
  @media only screen and (max-width: 500px) {
    padding-top:35px;
    padding-bottom:35px;
  }
  @media only screen and (max-width: 400px) {
    padding-top:30px;
    padding-bottom:30px;
  }
}


h1, h2,  h4, h5{
   font-family: "Yanone Kaffeesatz"!important;//remover
}

h3, p, h6{
   font-family: "Heebo"!important;//remover
}

html {
  scroll-behavior: smooth !important;
  font-size: 10px !important;
}
//
body {
  background-size: cover;
  overflow-x: hidden !important;
  font-family: "Heebo"!important; //remover
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primaryColor};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.secondaryColor};
    }
}

*:focus {
  outline: transparent !important;
}

a,
button {
  cursor: pointer;
  text-decoration: none !important;
  transition: 0.25s;
}

a:hover,
button:hover {
  transition: 0.25s;
}

a::after,
a::before {
  transition: 0.3s;
}

a:hover::after,
a:hover::before {
  transition: 0.3s;
}

ol,
ul {
  list-style: none !important;
  padding-left: 0 !important;
  margin-bottom: 0 !important;
}

.container {
  max-width: 1330px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.loader-router {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background:  ${(props) => props.theme.primaryColor};
  background: ${(props) => `linear-gradient(
  to right,
  ${props.theme.primaryColor} 8%,
  ${props.theme.secondaryColor + "5a"} 25%,
  ${props.theme.primaryColor} 33%
  )`} ;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
}

@media only screen and (max-width: 1600px) {
  .container {
    max-width: 1230px;
  }
}

@media only screen and (max-width: 1400px) {
  .container {
    max-width: 1180px;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    max-width: 1100px;
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    max-width: 968px;
  }
}

@media only screen and (max-width: 900px) {
  .container {
    max-width: 878px;
  }

  .error-message {
    font-size: 12px;
    margin-top: 4px;
    padding-left: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .container {
  
  }
}

@media only screen and (max-width: 650px) {
  .container {
    
  }
}
`;
