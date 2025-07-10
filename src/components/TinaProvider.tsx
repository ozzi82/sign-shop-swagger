import { TinaCMS, TinaProvider } from "tinacms";
import { ReactNode } from "react";

const cms = new TinaCMS({
  enabled: process.env.NODE_ENV !== "production",
  sidebar: true,
});

interface TinaWrapperProps {
  children: ReactNode;
}

export const TinaWrapper = ({ children }: TinaWrapperProps) => {
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
};