import Link from "next/link";
import { NextImage } from "codiedigital/dist/cjs/components/data/next-image/";

import {
  Container,
  Error,
  MenuMobile,
} from "codiedigital/dist/cjs/components/data";
import { IMenu as IMenuMobileSocial } from "codiedigital/dist/cjs/interfaces/header";
import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";

import { linksData } from "../data";

import * as S from "./styles";

export function Header() {
  const { facebook, instagram, linkedin } = useSocialLinks();

  const footerMEnuMobile: IMenuMobileSocial[] = [
    {
      id: 1,
      icon: "FacebookIcon" || facebook.svgIcon,
      link: "",
      href: facebook.url,
      targetBlank: true,
    },
    {
      id: 2,
      icon: "InstagramIcon" || instagram.svgIcon,
      link: "",
      href: instagram.url,
      targetBlank: true,
    },
    {
      id: 3,
      icon: "LinkedinIcon" || "",
      link: "",
      href: linkedin.url,
      targetBlank: true,
    },
  ];

  return (
    <S.Header>
      <Error name="header">
      <MenuMobile
            linksMenu={linksData}
            bottomInfos={{ contactList: footerMEnuMobile }}
          />
        <Container>
          
          <div className="content-header">
            <div className="box-logo">
              <NextImage src={"/images/logo-fp-rodrigues.png"} />
            </div>
            <nav className="menu-links">
              {linksData.map((item) => (
                <Link className="font-16-light" key={item.id} href={item.href}>
                  {item.link}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </Error>
    </S.Header>
  );
}
