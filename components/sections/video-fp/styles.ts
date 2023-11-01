import styled from "styled-components";

export const VideoFP = styled.section`

  margin-top: -30px;

  .container {
    .content {
      position: relative;
      width: 100%;
      display: flex;
      justify-content:center;
     
      .block {
        background-color: grey;
        position: relative;
        max-width: 1120px;
        width: 80%;
        height: 500px;
        z-index: 1;
      }

      .circle-small{
        position: absolute;
        bottom: 50px;
        left: 4vw;
        z-index: 0;

        svg {
          width: 200px;
        }
      }

      .circle-big {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 0;

        svg {
          width: 300px;
        }
      }
    }
  }

  @media only screen and (max-width: 900px){
    margin-top: 0;
  }
`;
