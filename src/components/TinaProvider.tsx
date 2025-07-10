import { TinaCMS, TinaProvider } from "tinacms";
import { ReactNode } from "react";

// Check if TinaCMS client is available
let client: any;
try {
  ({ client } = require("../../tina/__generated__/client"));
} catch (error) {
  // TinaCMS not yet initialized
  client = null;
}

const cms = new TinaCMS({
  enabled: process.env.NODE_ENV !== "production" && !!client,
  sidebar: !!client, // Only enable sidebar if client is available
  clientId: client ? undefined : "disabled", // Disable if no client
});

interface TinaWrapperProps {
  children: ReactNode;
}

export const TinaWrapper = ({ children }: TinaWrapperProps) => {
  // If no client is available, just return children without TinaCMS
  if (!client) {
    return <>{children}</>;
  }

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
};