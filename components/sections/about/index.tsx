import {
  Container,
  Error,
  NextImage,
} from "codiedigital/dist/cjs/components/data";

import { IPageInformations } from "src/interfaces/generics";

import * as S from "./styles";
import { CirclesBannerSVG } from "public/svg/CirclesBannerSVG";
import { EngineerBackSVG } from "public/svg/EngineerBackSVG";

export function About({ data }: { data: IPageInformations }) {
  return (
    <Error name="about">
      <S.About id="about" className="section-pad">
        <div className="engineer-back-left">
          <div className="box-svg">
            <EngineerBackSVG />
          </div>

          <div className="box-img">
            <NextImage src="/images/engineer-photo.png" />
          </div>
        </div>

        <Container>
          <div className="content">
            <div className="title margin-b-30">
              <h2 className="font-56-bold">Sobre Nós</h2>
            </div>
            <div
              className="description font-16 margin-b-30"
              dangerouslySetInnerHTML={{ __html: data.descricao || "?" }} //falta o texto no banco
            />
            <div className="box-itens">
              {data.objetos.map((item) => {
                return (
                  <div className="item margin-b-30">
                    <div className="image">
                      <NextImage baseImage src={item.imagem} />
                    </div>
                    <div className="text">
                      <h3 className="font-16-bold margin-b-10">{item.titulo}</h3>
                      <div
                        className="font-16"
                        dangerouslySetInnerHTML={{ __html: item.descricao }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </S.About>
    </Error>
  );
}
