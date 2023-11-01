import styled from "styled-components";

export const Products = styled.section`
  .container {
    .box-badget {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 70px;

      p {
        max-width: 742px;
        color: #707070;
      }
    }

    .box-swiper {
      position: relative;
      .button-nav {
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        max-width: fit-content;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        position: absolute;
        z-index: 5;

        svg {
          fill: ${(props) => props.theme.lightBlue};
          width: 20px;
          height: 40px;
          height: auto;
          filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
          transition: 0.3s;

          &:hover {
            fill: ${(props) => props.theme.orange};
            filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1));
          }
        }
      }
      .r-btn {
        right: -50px;
      }
      .l-btn {
        left: -50px;
      }

      .content-item {
        .box-img {
          position: relative;
          height: 360px;
          img {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        }

        .box-title {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          background-color: ${(props) => props.theme.darkBlue};
          color: #fff;
          margin-top: -10px;
          padding: 30px 50px;

          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          text-align: center;
          justify-content: center;
          height: 100px;
          h3 {
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1450px) {
  }
  @media only screen and (max-width: 1250px) {
    .responsive-box {
      display: flex;
      justify-content: center;
      .box-swiper {
        max-width: 88vw;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    .container {
      .box-swiper {
        position: relative;
        max-width: 100%;

        .btn-nav-responsive-box {
          display: flex;
          justify-content: center;

          .button-nav {
            top: unset;
            height: fit-content;
            position: relative;
            margin-top: 20px;
          }

          .r-btn {
            margin-left: 10px;
            right: unset;
          }
          .l-btn {
            margin-right: 10px;
            left: unset;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 680px) {
    display: flex;
    flex-direction: column-reverse;
    .container {
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .box-badget {
        text-align: center;
        gap: 0;
        .btn-orcamento {
          display: none;
        }
      }
      .mobile-orcamento {
        margin-top: 25px;
        display: flex !important;
        width: 100%;
        justify-content: center;
      }
    }
  }
`;
