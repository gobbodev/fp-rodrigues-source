import { renderToString } from "react-dom/server";

import {
  Container,
  Error,
  NextImage,
} from "codiedigital/dist/cjs/components/data";

import { Button } from "components/data";
import * as S from "./styles";
import { CirclesBannerSVG } from "public/svg/CirclesBannerSVG";
import { ArrowOrcamentoSVG } from "public/svg/ArrowOrcamentoSVG";

export function Banner() {

  const arrowIconString = renderToString(<ArrowOrcamentoSVG/>);

  return (
    <Error name="banner">
      <S.Banner id="banner">
        <div className="gradient" />

        <div className="banner-background">
          <NextImage src="/images/banner-temp.jpg" />
        </div>

        <div className="circles-right">
          <CirclesBannerSVG />
        </div>

        <Container>
          <div className="content">
            <div className="main-title">
              <h1 className="font-80-bold">
                <span>Iluminando com </span>
                <span>Eficiência e Qualidade!</span>
              </h1>
            </div>

            <div className="description">
              <p className="font-20-light">
                Aqui você encontra a parceira ideal para tornar seus espaços
                industriais mais confortáveis, eficientes e bem iluminados,
                contribuindo para o sucesso de seu negócio.
              </p>
            </div>

            <div className="btn-budget">
              <Button
                className="font-16-bold"
                aria-label="botão para fazer orçamento"
                href="/"
                text="Orçamento"
                svg={{ icon: arrowIconString, size: 10 }}
              />
            </div>
          </div>
        </Container>
      </S.Banner>
    </Error>
  );
}
