import Link from "next/link";

import { Container, Error } from "codiedigital/dist/cjs/components/data/";
import { FormHandler } from "src/utils/form-handler";
import {
  Input,
  InputMask,
  Textarea,
  validationYup,
} from "codiedigital/dist/cjs/components/inputs";

import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
import {
  FacebookIcon,
  IconWhats,
  IconWhatsInverse,
  InstagramIcon,
  PhoneIcon,
} from "codiedigital/dist/cjs/components/icons";

import * as S from "./styles";

export function Contact() {
  const { telefone, whatsapp, facebook, instagram } = useSocialLinks();

  return (
    <Error name="contact">
      <S.Contact id="contact" className="section-pad">
        
        <Container>
          <div className="content-contact">
            <div className="box-titulo">
              <h2 className="font-56-bold uppercase">entre em contato</h2>
              <p className="font-16-light">
                Preencha o formulário{" "}
                <span className="font-16-light">ao lado</span> e entraremos em
                contato com você ou entre em contato conosco pelas informações
                abaixo.
              </p>
            </div>

            <div className="box-informacoes font-16-light">
              <div className="info-group1">
                <Link href={telefone.url ? telefone.url : ""} target="_blank">
                  <PhoneIcon fill="#fff" />
                  (43) 3354-3000
                </Link>
                <Link href={whatsapp.url ? whatsapp.url : ""} target="_blank">
                  <IconWhatsInverse fill="#fff" />
                  (43) 9 9950-0000
                </Link>
              </div>

              <div className="info-group2">
                <Link href={instagram.url ? instagram.url : ""} target="_blank">
                  <InstagramIcon fill="#fff" />
                  @fprodrigues
                </Link>
                <Link href={facebook.url ? facebook.url : ""} target="_blank">
                  <FacebookIcon fill="#fff" />
                  /fprodrigues
                </Link>
              </div>
            </div>
          </div>

          <div className="content-form">
            <FormHandler
              button={{ text: "Enviar", className: "font-16" }}
              onSucess={(data) => console.log(data)}
              defaultSchemas={{
                phone: true,
                email: true,
                name: true,
                message: true,
              }}
            >
              <Input
                type="name"
                name="name"
                label="Nome Completo"
                placeholder="Digite seu nome aqui"
              />
              <Input
                type="email"
                name="email"
                label="E-mail"
                placeholder="Digite seu email aqui"
              />
              <InputMask
                className="telefone"
                mask="(99) 99999 9999"
                name="phone"
                label="Telefone"
                placeholder="(DDD) 00000-0000"
              />
              <Textarea
                name="message"
                label="Mensagem"
                placeholder="O que deseja nos dizer?"
              />
            </FormHandler>
          </div>
        </Container>
      </S.Contact>
      {/* <ContactLink linkName="facebook" />
      <ContactLink linkName="linkedin" />
      <ContactLink linkName="instagram" />
      <ContactLink linkName="whatsapp" />
      <ContactLink linkName="maps" />
      <ContactLink linkName="email" />
      <ContactLink linkName="linkedin" />
      <ContactLink getAllLinks /> */}
    </Error>
  );
}
