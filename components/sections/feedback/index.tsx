import { renderToString } from "react-dom/server";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Button,
  Container,
  Error,
  NextImage,
} from "codiedigital/dist/cjs/components/data/";

import { IPageInformations } from "src/interfaces/generics";

import { RArrowClients } from "public/svg/RArrowClients";
import { LArrowClients } from "public/svg/LArrowClients";
import { CircleSmallSVG } from "public/svg/CircleSmallSVG";
import { OndinhaSVG } from "public/svg/OndinhaSVG";

import * as S from "./styles";

export function Feedback({ data }: { data: IPageInformations }) {
  const lBtnIconString = renderToString(<LArrowClients />);
  const rBtnIconString = renderToString(<RArrowClients />);
  return (
    <Error name="feedback">
      <S.Feedback id="feedback" className="section-pad">
        <Container>
          <div className="title margin-b-30">
            <h2 className="font-56-bold">O que nossos clientes dizem?</h2>
          </div>
          <div className="description">
            <p className="font-16">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd.
            </p>
            {/*mudar */}
          </div>
          <div className="box-swiper-1">
            <Button
              className="button-nav l-btn"
              svg={{ icon: lBtnIconString, size: 10 }}
              type="button"
              text=""
            />
            <Button
              className="button-nav r-btn"
              svg={{ icon: rBtnIconString, size: 10 }}
              type="button"
              text=""
            />

            <Swiper
              className="swiper-banner"
              slidesPerView="auto"
              breakpoints={{
                1100: { slidesPerView: 3, spaceBetween: 20 },
                680: { slidesPerView: 2 , spaceBetween: 15},
              }}
              spaceBetween={30}
              autoplay={{ delay: 3500, disableOnInteraction: true }}
              navigation={{
                nextEl: `.r-btn`,
                prevEl: `.l-btn`,
              }}
            >
              {data.depoimentos.map((element, index) => (
                <SwiperSlide key={element.id}>
                  <div className="content-item">
                    <div className="box-top margin-b-30">
                      <NextImage baseImage src={element.imagem} />
                      <div className="text">
                        <h3 className="font-20-bold">{element.titulo}</h3>
                        <h6 className="font-20-regular">{element.subtitulo}</h6>
                      </div>
                    </div>

                    <div className="box-bottom">
                      <div
                        className="font-16"
                        dangerouslySetInnerHTML={{
                          __html: data.depoimentos[0].descricao /*mudar */,
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="box-swiper-2">
            <Swiper
              className="swiper-banner"
              slidesPerView="auto"
              breakpoints={{
                1150: { slidesPerView: 6 },
                1050: { slidesPerView: 4 },
                0: { slidesPerView: 3 },
              }}
              spaceBetween={30}
              autoplay={{ delay: 3500, disableOnInteraction: true }}
            >
              {data.marcas.map((element, index) => (
                <SwiperSlide key={element.id}>
                  <div className="content-item">
                    <div className="box-top margin-b-30">
                      <NextImage baseImage src={element.fileData} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
        <div className="background">
          <OndinhaSVG />
        </div>
      </S.Feedback>
    </Error>
  );
}
