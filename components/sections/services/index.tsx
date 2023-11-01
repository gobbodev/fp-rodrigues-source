import { Container, Error, NextImage } from "codiedigital/dist/cjs/components/data/";

import { IPageInformations } from "src/interfaces/generics";

import * as S from "./styles";
import { CircleSmallSVG } from "public/svg/CircleSmallSVG";
import { CircleBigSVG } from "public/svg/CircleBigSVG";

export function Services({ data }: { data: IPageInformations }) {
  return (
    <Error name="services">
      <S.Services id="services" className="section-pad">
        <Container>
          <div className="title margin-b-30">
            <h2 className="font-56-bold">Nossos Serviços</h2>
          </div>

          <div className="description">
            <p className="font-16">{data.servicosDesc}</p>
          </div>

          <div className="content top">
            <div className="box-image">
                <NextImage src="/images/i-services/0.webp"/>
            </div>
            <div className="text">
              <h3 className="font-20-bold margin-b-30">{data.servicos[1].titulo}</h3>
              <div
                className="phrase font-16"
                dangerouslySetInnerHTML={{
                  __html: data.servicos[0].descricao || "",
                }}
              />
            </div>

            <div className="box-image">
                <NextImage src="/images/i-services/1.webp"/>
            </div>
          </div>

          <div className="content bottom">
            <div className="text">
              <h3 className="font-20-bold margin-b-30">{data.servicos[0].titulo}</h3>
              <div
                className="text font-16"
                dangerouslySetInnerHTML={{
                  __html: data.servicos[1].descricao || "",
                }}
              />
            </div>

            <div className="box-image">
                <NextImage src="/images/i-services/2.webp"/>
            </div>
            <div className="text">
              <h3 className="font-20-bold margin-b-30">{data.servicos[2].titulo}</h3>
              <div
                className="text font-16"
                dangerouslySetInnerHTML={{
                  __html: data.servicos[2].descricao || "",
                }}
              />
            </div>
          </div>
        </Container>
      </S.Services>
    </Error>
  );
}
