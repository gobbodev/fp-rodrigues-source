import { Container, Error } from "codiedigital/dist/cjs/components/data/";

import * as S from "./styles";
import { CircleSmallSVG } from "public/svg/CircleSmallSVG";

export function QualityParalax() {
  return (
    <Error name="qualityParalax">
      <S.QualityParalax className="section-pad">
        <div className="gradient" />
        <Container>
          <div className="phrase">
            <h4 className="font-56-bold">
              Qualidade insuperável em todos os produtos e garantias de 5 a 10
              anos
            </h4>
          </div>
        </Container>
      </S.QualityParalax>
    </Error>
  );
}
