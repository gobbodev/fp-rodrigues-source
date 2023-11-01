import styled from "styled-components";

export const QualityParalax = styled.section`
  height: calc(720px - 8vw); //perguntar

  background: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/banner-temp.jpg");

  position: relative;

  .gradient {
    position: absolute;
    height: 100%;
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    top: 0;
  }

  .container {
    position: relative;
    display: grid;
    height: 100%;

    .phrase {
      justify-self: center;
      align-self: center;
      text-align: center;
      z-index: 99;
      h4 {
        max-width: 580px;
        color: #fff;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    height: calc(500px - 8vw); //perguntar
    
  }
  @media only screen and (max-width: 550px) {
    height: calc(320px - 8vw); //perguntar
    
  }
`;
