import { Layout } from "components/layout";
import { Banner } from "components/sections/banner";
import { Contact } from "components/sections/contact";
import { About } from "components/sections/about";
import { VideoFP } from "components/sections/video-fp";

import { IPageInformations } from "src/interfaces/generics";
import { getPageData } from "src/services/pages";

import * as S from "styles/pages/home";
import { Products } from "components/sections/products";
import { QualityParalax } from "components/sections/quality-parallax";
import { Feedback } from "components/sections/feedback";
import { Services } from "components/sections/services";

// React > Next.js > Bibliotecas > Src > Componentes > Interfaces > Css

export default function HomePage({
  PageContent,
}: {
  PageContent: IPageInformations;
}) {
  return (
    <Layout>
      <S.Home>
        <Banner />
        <About data={PageContent}/>
        <VideoFP />
        <Products data={PageContent}/>
        <QualityParalax/>
        <Services data={PageContent}/>
        <Feedback data={PageContent}/>
        <Contact />
      </S.Home>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const PageContent = await getPageData("home");

  return {
    props: {
      PageContent,
    },
  };
};