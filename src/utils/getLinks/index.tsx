import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
import Link from "next/link";
interface IContact {
  className?: string;
  linkName?: string;
  children?: React.ReactNode;
}

export function ContactLink(props: IContact) {
  const socialList = Object.values(useSocialLinks());

  const socialItem = socialList.filter(
    (item) => item.label.toLowerCase() === props.linkName
  );

  return (
    <>
      {socialItem.map((item) => (
        <Link
          className={props.className ? props.className : undefined}
          href={item.url ? item.url : "/"}
          /*mudar valor do href*/
        >
          {props.children ? props.children : undefined} {/*erro aqui */}
        </Link>
      ))}
    </>
  );
}
