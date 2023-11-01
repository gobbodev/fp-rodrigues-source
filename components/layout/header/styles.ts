import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  width: 100%;
  z-index: 999;
  padding-top: 1.45vw;

  .menu-mobile {
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 30px;
    display: none;

    .block-bar > div {
      box-shadow: 0px 0px 0px 1px rgba(35, 161, 235, 0.44);
    }

    .menu-box {
      background-color: #fff;

      .top-box {
        height: 80%;

        nav {
          margin-top: 7vh;

          a {
            margin-top: 35px;
            color: ${(props) => props.theme.lightBlue};
          }
        }

        button {
          min-width: 20px !important;
          margin-right: -15px;

          svg{
            fill: ${(props) => props.theme.lightBlue};
          }
        }
      }
      
      .buiLaK {
        border-color: ${(props) => props.theme.orange};
      }

      .links {
        .top {
          justify-content: center;
          gap: 25px;

          a {
            background-color: ${(props) => props.theme.lightBlue};

            svg {
              path {
                fill: ${(props) => props.theme.orange};
              }
            }
          }
        }
      }
    }
  }
  .container {
    position: relative;
    z-index: 22;

    .content-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .box-logo {
        max-width: 285px;
        width: 100%;
        height: 6.53vh;

        img {
          object-fit: contain;
          object-position: left;
        }
      }

      .menu-links {
        display: flex;
        gap: 53px;
        width: fit-content;
        padding: 13px 60px;
        border-radius: 22px;
        background-color: rgb(0, 0, 0, 0.7);

        a {
          position: relative;
          color: #fff;
          transition: 0.3s all;

          &::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: ${(props) => props.theme.orange};
          }

          &:hover {
            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1365px) {
    .menu-links {
      gap: 2.86vw !important;
      padding: 1.51vh 3.53vw !important;
    }
  }
  @media only screen and (max-width: 1023px) {
    .menu-mobile {
      display: flex;
      justify-content: flex-end;
      margin-right: 20px;
      margin-top: 30px;
      display: flex;

      .block-bar > div {
        box-shadow: 0px 0px 0px 1px rgba(35, 161, 235, 0.44);
      }
    }
    .container {
      .content-header {
        .box-logo {
          position: absolute;
          margin-top: -20px;
          max-width: 285px;
          height: unset;
        }

        .menu-links {
          display: none;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .container {
      .content-header {
        .box-logo {
          max-width: 245px;
        }
      }
    }
  }
  @media only screen and (max-width: 599px) {
    .container {
      .content-header {
        .box-logo {
          max-width: 215px;
        }
      }
    }
  }
  @media only screen and (max-width: 360px) {
    .menu-mobile {
      margin-right: 15px;
      margin-top: 25px;
    }
    .container {
      .content-header {
        .box-logo {
          max-width: 180px;
        }
      }
    }
  }
`;
