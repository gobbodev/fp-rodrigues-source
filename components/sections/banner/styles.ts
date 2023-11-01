import styled from "styled-components";

export const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: relative;

  .gradient {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6), transparent);
    z-index: 1;
  }

  .banner-background {
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: 100vw;
  }

  .circles-right {
    position: absolute;
    top: 120px;
    right: -150px;

    svg {
      opacity: 0.5;
      width: 100%;
    }
  }

  .container {
    position: relative;
    height: 100vh;
    z-index: 3;
    z-index: 99;

    .content {
      position: absolute;
      margin-top: 30.37vh;
      color: #fff;

      .main-title {
        position: relative;
        padding-bottom: 5vh;
        margin-bottom: 3.52vh;
        width: fit-content;
        text-shadow: 0px 0px 15px rgba(0, 0, 0, 1);

        h1 {
          display: flex;
          flex-direction: column;
          gap: 1.57vh;
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          height: 5px;
          background-color: #fff;
          width: 18%;
        }
      }

      .description {
        max-width: 542px;
        margin-bottom: 5.24vh;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
      }
    }
  }

  @media only screen and (max-width: 1450px) {
    .circles-right {
      position: absolute;
      top: 75px;
      right: -200px;

      svg {
        width: 80%;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .container {
      .content {
        margin-top: 35vh;
        .main-title {
          h1 {
            font-size: 66px;
            gap: 10px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .banner-background {
      img {
        width: 200vw !important;
      }
    }

    .container {
      .content {
        margin-top: 35vh;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .circles-right {
      top: -25px;
      right: -330px;

      svg {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 660px) {
    .container {
      .content {
        .main-title {
          h1 {
            font-size: 62px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 550px) {
    .banner-background {
      img {
        width: 1290px !important;
        left: 0 !important;
      }
    }

    .circles-right {
      top: -95px;
      right: -380px;

      svg {
        width: 35%;
      }
    }

    .container {
      .content {
        margin-top: 32vh;
        .main-title {
          h1 {
            font-size: 52px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .circles-right {
      top: -115px;
      right: -400px;

      svg {
        width: 30%;
      }
    }

    .container {
      .content {
        .main-title {
          h1 {
            font-size: 48px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 374px) {
   .circles-right {
    top: -125px;
     right: -420px;

     svg {
       width: 25%;
     }
   }

   .container {
     .content {
       .main-title {
         h1 {
           font-size: 42px;
         }
       }
     }
   }
 }
`;
