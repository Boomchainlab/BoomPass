import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

const thirdwebClientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

const Provider = ({ children }) => {
  return (
    <ThirdwebProvider 
      activeChain="base" 
      clientId={thirdwebClientId}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default Provider;
