import styled from "styled-components";

export const Button = styled.div`
  @keyframes r-movie {
    0% {
      opacity: 1;
    }
    30% {
      opacity: 0;
      transform: translateX(30px);
    }
    60% {
      opacity: 0;
      transform: translateX(-35px);
    }
    90% {
      opacity: 1;
    }
  }
  width: fit-content;
  a {
    display: block;
    color: #fff;
    padding: 15px 0;
    padding-right: 25px;
    padding-left: 63px;
    background-color: ${(props) => props.theme.orange};
    border-radius: 30px;

    span {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      gap: 30px;
    }

    i{
        height:18px!important;
    }
    svg {
      width: 22px !important;
      height: 18px!important;
    }

    &:hover {
      svg {
        animation: r-movie 0.8s;
      }
    }
  }

  @media only screen and (max-width: 680px) {
    a {
      display: block;
      color: #fff;
      padding: 15px 0;
      padding-right: 20px;
      padding-left: 50px;
      background-color: ${(props) => props.theme.orange};
      border-radius: 30px;

      span {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 15px;
      }

      
    }
  }
`;
