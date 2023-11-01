import { Container, Error } from "codiedigital/dist/cjs/components/data/";

import * as S from "./styles";
import { CircleSmallSVG } from "public/svg/CircleSmallSVG";
import { CircleBigSVG } from "public/svg/CircleBigSVG";

export function VideoFP() {
  return (
    <Error name="videoFP">
      <S.VideoFP>
        <Container>
          <div className="content">
            <div className="block" />

            <div className="circle-small">
              <CircleSmallSVG />
            </div>

            <div className="circle-big">
              <CircleBigSVG />
            </div>
          </div>
        </Container>
      </S.VideoFP>
    </Error>
  );
}
