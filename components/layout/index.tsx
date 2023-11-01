import Footer from "./footer";
import { Header } from "./header";
import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
  isBackgroundColor?: boolean;
}

export function Layout({ children, isBackgroundColor }: LayoutProps) {
  return (
    <S.Layout isBackgroundColor={isBackgroundColor}>
      <Header />
      {children}
      <Footer />
    </S.Layout>
  );
}
