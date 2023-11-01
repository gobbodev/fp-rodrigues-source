import styled from "styled-components";

export const Contact = styled.section`
  position: relative;
  background-color: #00346e;

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 8.125vw;

    .content-contact {
      max-width: 420px;
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 58px;

      .box-titulo {
        h2 {
          margin-bottom: 40px;

          &::after {
            content: "";
            position: relative;
            display: block;
            margin-top: 20px;
            height: 5px;
            width: 90px;
            background-color: #fff;
          }
        }

        p {
          max-width: 419px;

          span {
            font-family: "Heebo";
          }
        }
      }

      .box-informacoes {
        display: flex;
        flex-direction: column;
        gap: 48px;

        a {
          display: flex;
          gap: 12px;
          align-items: flex-end;
          width: fit-content;
          color: #fff;
          svg {
            width: 20px;
          }
        }

        .info-group1 {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-group2 {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      }
    }

    .content-form {
      color: #fff;
      font-weight: 300;
      max-width: 775px;
      width: 100%;

      form {
        #form-error-focus {
          //conserta o height do form
          position: absolute;
        }

        .input-component {
          margin-bottom: 15px;

          label {
            margin-bottom: 8px;
          }

          .input-content {
            input {
              font-weight: 300;
              max-width: 775px;
              width: 100%;
              padding-left: 16px;
              padding-top: 14.5px;
              padding-bottom: 11.5px;
              background-color: rgb(255, 255, 255, 0.12);
              border-radius: 12px;
              border: none;

              &::placeholder {
                color: #fff;
              }
            }
          }

          .input-content:nth-child(1) {
            //conserta o alinhamento row da label com o input no InputMask
            display: flex;
            flex-direction: column;
          }

          textarea {
            font-weight: 300;
            max-width: 775px;
            width: 100%;
            padding-left: 16px;
            padding-top: 14.5px;
            padding-bottom: 14.5px;
            background-color: rgb(255, 255, 255, 0.12);
            border-radius: 12px;
            border: none;
            min-height: 135px;
            max-height: 250px;
            &::placeholder {
              color: #fff;
            }
          }
        }

        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          width: 100%;
          gap: 20px;
          .actions-form {
            max-width: 362px; //atençao
            width: 100%; //atençao

            [class*="_Button"] {
              width: 100%;
            }

            button {
              width: 100%; //atençao
              padding: 15px 0;
              background-color: ${(props) => props.theme.orange};
              border-radius: 30px;
              border: none;
              color: inherit;
              font-weight: 600;

              svg {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .container {
      flex-direction: column;
      gap: 50px;
      .content-contact {
        gap:30px;
        .box-titulo{
          h2{
            margin-bottom:25px;

            &::after{
              margin-top:10px;
              height: 4px;
            }
          }
        }
        .box-informacoes{
          gap:38px;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      .content-form {
        form {
          //conserta o height do form
          .actions {
            .captcha {
              div {
                width: 216px!important;
                iframe {
                  max-width: 220px !important;
                  width: 100%;
                  height: 72px; /*mudar*/
                  margin-top: 25px;
                  border-radius: 8px;
                  background-color: #fff;
                  transition: all 0.5s ease-out;
                  box-shadow: 5px 5px 18px 0 rgb(91 51 112 / 20%);
                  margin-top: 10px;
                  color: #fff !important;
                  transform: scale(0.9);
                  transform-origin: 0 0;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .container {
      flex-direction: column;
      gap: 40px;
      .content-contact {
        gap:20px;
        .box-titulo{
          h2{
            margin-bottom:15px;

            &::after{
              height: 3px;
              margin-top:10px;
            }
          }
        }
        .box-informacoes{
          gap:28px;
        }
      }
    }
  }
  @media only screen and (max-width: 420px) {
    .container {
      .content-form {
        form {
          //conserta o height do form
          .actions {
            gap:0;
          }
        }
      }
    }
  }
 
`;
