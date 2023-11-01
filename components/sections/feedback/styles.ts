import styled from "styled-components";

export const Feedback = styled.section`
  position: relative;

  .background {
    position: absolute;
    width: 100%;
    bottom: -6px;
    z-index: 0;
    height: fit-content;
  }

  .box-swiper-1 {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 80px;
    padding-bottom: 50px;

    .button-nav {
      top: 100%;
      height: fit-content;
      width: 100%;
      display: flex;
      max-width: fit-content;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      position: absolute;
      z-index: 5;
      transform: translateY(-50%);

      svg {
        fill: ${(props) => props.theme.lightBlue};
        width: 20px;
        height: 40px;
        height: auto;

        transition: 0.3s all;

        path {
          transition: 0.3s all;
        }

        &:hover {
          path {
            fill: ${(props) => props.theme.orange};
          }

          filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1));
        }
      }
    }

    .r-btn {
      right: 50px;

      svg {
        width: 81px;
        height: 31px;
      }
    }

    .l-btn {
      right: 160px;

      svg {
        transform: rotate(-180deg);
        width: 54px;
        height: 31px;
      }
    }

    .content-item {
      padding: 40px;

      .box-top {
        display: flex;
        gap: 25px;

        img {
          max-width: 80px;
        }

        .text {
          h3 {
            margin-bottom: 5px;
          }
        }
      }

      .box-bottom {
        color: #353535;
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    .container {
      .box-swiper-1 {
        .content-item {
          padding: 20px;
          padding-top: 35px;

          .box-top {
            justify-content: flex-start;
            width: 100%;

            .next-image {
              width:50px !important;
              min-width:50px !important;
              img {
                width: 50px !important;
              }
            }

            .text {
              width: 100%;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 599px) {
    .container {
      .title{
        display:flex;
        justify-content:center;
      }

      .description{
        text-align:center;
      }

      .box-swiper-1 {
        .content-item {
          .box-top {
            .next-image {
              width:40px !important;
              min-width:40px !important;
              img {
                width: 40px !important;
              }
            }

            .text {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
