import styled from "styled-components";

export const About = styled.section`
  position: relative;
  height: 100%;
  display: flex;

  .engineer-back-left {
    position: relative;
    max-width: 915px;
    height: 39.22vw;
    z-index: 98;
    top: -20vw;

    .box-svg {
      position: absolute;

      svg {
        width: 47.66vw;
      }
    }

    .box-img {
      position: absolute;
      width: 28.16vw;
      top: 19.7vw;
      right: -45.2vw;
    }
  }

  .container {
    display: flex;
    justify-content: flex-end;

    .content {
      width: 50%;

      .description {
        color: #707070;
      }

      .box-itens {
        .item {
          display: flex;
          gap: 1.82vw;

          .image {
            width: 4.17vw;

            img {
              object-fit: contain;
            }
          }

          .text {
            h3 {
              color: ${(props) => props.theme.lightBlue};
            }

            p {
              color: #464646;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1450px) {
    .engineer-back-left {
      top: -16vw;
    }
  }
  @media only screen and (max-width: 1250px) {
    .engineer-back-left {
      top: -14vw;
    }
  }
  @media only screen and (max-width: 1050px) {
    .engineer-back-left {
      top: -10vw;
    }
  }
  @media only screen and (max-width: 900px) {
    .engineer-back-left {
      top: 30px;

      .box-svg {
        position: absolute;
        left: -3.1vw;
        svg {
          width: 40.66vw;
        }
      }

      .box-img {
        right: -36vw;
        width: 28.16vw;
        top: 12.2vw;
      }
    }

    .container {
      .content {
        width: 60%;
        .box-itens {
          .item {
            .image {
              width: 45px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .engineer-back-left {
      top: 70px;

      .box-svg {
        position: absolute;
        left: -9.1vw;
        svg {
          width: 40.66vw;
        }
      }

      .box-img {
        right: -29.9vw;
        width: 28.16vw;
        top: 12.2vw;
      }
    }

    .container {
      .content {
        width: 65%;
      }
    }
  }

  @media only screen and (max-width: 599px) {
    .engineer-back-left {
      display: none;
    }

    .container {
      .content {
        width: 100%;

        .title {
          display: flex;
          justify-content: center;
        }

        .box-itens {
          .item {
            .image {
              width: 50px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .container {
      .content {
        .box-itens {
          .item {
            .image {
              width: 40px;
            }
          }
        }
      }
    }
  }
`;
