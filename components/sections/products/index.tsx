import { renderToString } from "react-dom/server";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Container,
  Error,
  NextImage,
} from "codiedigital/dist/cjs/components/data";

import { Button } from "components/data";
import { IPageInformations } from "src/interfaces/generics";

import * as S from "./styles";
import {
  NavLeftIcon,
  NavRightIcon,
} from "codiedigital/dist/cjs/components/icons";
import { ArrowOrcamentoSVG } from "public/svg/ArrowOrcamentoSVG";

export function Products({ data }: { data: IPageInformations }) {
  const arrowIconString = renderToString(<ArrowOrcamentoSVG />);
  const lBtnIconString = renderToString(<NavLeftIcon />);
  const rBtnIconString = renderToString(<NavRightIcon />);

  return (
    <Error name="products">
      <S.Products id="products" className="section-pad">
        <Container>
          <div className="title margin-b-30">
            <h2 className="font-56-bold">Nossos Produtos</h2>
          </div>

          <div className="box-badget margin-b-30">
            <p className="font-16">{data.nossosProdutosDesc}</p>

            <Button
              className="btn-orcamento font-16-bold"
              aria-label="botão para fazer orçamento"
              href="/"
              text="Orçamento"
              svg={{ icon: arrowIconString, size: 10 }}
            />
          </div>

          <div className="responsive-box">
            <div className="box-swiper">
              <Swiper
                className="swiper-banner"
                slidesPerView="auto"
                breakpoints={{
                  1300: { slidesPerView: 4 },
                  900: { slidesPerView: 3 },
                  500: { slidesPerView: 2, spaceBetween: 20 },
                  0: { slidesPerView: 1, spaceBetween: 15 },
                }}
                spaceBetween={30}
                autoplay={{ delay: 3500, disableOnInteraction: true }}
                navigation={{
                  nextEl: `.r-btn`,
                  prevEl: `.l-btn`,
                }}
              >
                {data.produtos.map((element, index) => (
                  <SwiperSlide key={element.id}>
                    <div className="content-item">
                      <div className="box-img">
                        {/*quero pegar o height disso */}
                        <NextImage baseImage src={element.imagem} />
                      </div>

                      <div className="box-title">
                        <h3 className="font-20-bold">{element.titulo}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="btn-nav-responsive-box">
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
              </div>
              <div className="mobile-orcamento" style={{ display: "none" }}>
                <Button
                  className="font-16-bold"
                  aria-label="botão para fazer orçamento"
                  href="/"
                  text="Orçamento"
                  svg={{ icon: arrowIconString, size: 10 }}
                />
              </div>
            </div>
          </div>
        </Container>
      </S.Products>
    </Error>
  );
}
