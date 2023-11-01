import { ReactNode, createContext, useContext } from "react";
import { IconsNames } from "codiedigital/dist/cjs/components/icons";
import { useSocialLinks } from "codiedigital/dist/cjs/hooks/use-social-links";
type SocialNames = "whatsappfixo" | "instagram" | "facebook" | "whatsapp" | "twitter" | "linkedin" | "email" | "telefone" | "maps";
type ISocialItem = {
    [key in SocialNames]: {
        id: number;
        label: string;
        url: string;
        rawLink: string;
        svgIcon: IconsNames;
        svgFilledIcon?: IconsNames;
    };
};
// Define o tipo para socialList
type SocialListType = ISocialItem; // Substitua YourSocialListType pelo tipo real

// Crie o contexto
export const SocialListContext = createContext<SocialListType | undefined>(undefined);

export function SocialListProvider({ children }: { children: ReactNode }) {
    const socialList = useSocialLinks(); // Aqui você obtém a socialList usando useSocialLinks()
  
    
    // Forneça socialList para o contexto
    return (
      <SocialListContext.Provider value={socialList}>
        {children}
      </SocialListContext.Provider>
    );
  }

// Crie um gancho personalizado para acessar o contexto
export function useSocialList() {
  const context = useContext(SocialListContext);
  if (context === undefined) {
    throw new Error("useSocialList deve ser usado dentro de um SocialListProvider");
  }
  return context;
}
