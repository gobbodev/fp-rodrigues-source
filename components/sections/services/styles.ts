import styled from "styled-components";

export const Services = styled.section`
  padding-bottom: 0 !important;

  .container {
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 50px;

      p {
        color: #707070;
        max-width: 657px;
      }
    }

    .content {
      display: grid;
      grid-template-columns: repeat(3, minmax(200px, 1fr));
      grid-gap: 60px;

      .block {
        background-color: red;
      }

      .text {
        align-self: center;
        text-align: center;

        h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: ${(props) => props.theme.orange};
          padding-bottom: 10px;
          text-transform: uppercase;

          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            height: 3px;
            background-color: ${(props) => props.theme.orange};
            width: 14%;
          }
        }

        .phrase {
          color: #707070;
        }
      }
    }

    .bottom {
      margin-top: 20px;
    }
  }
  @media only screen and (max-width: 1023px) {
    .container {
      max-width: 657px;

      .description {
        margin-bottom: 30px;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      .description {
        margin-bottom: 20px;
      }
      .content {
        .text {
          h3 {
            padding-bottom:8px;
            &::after {
              height: 2px;
            }
          }
        }
      }
    }
  }
`;
