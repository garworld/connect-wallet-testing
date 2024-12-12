import { http, createConfig, injected } from '@wagmi/core';
import { mainnet, sepolia } from '@wagmi/core/chains';
import { walletConnect } from 'wagmi/connectors';

const projectId = import.meta.env.VITE_PROJECT_ID;
console.log({ projectId });

export const config = createConfig({
  autoConnect: false,
  chains: [sepolia, mainnet],
  connectors: [injected(), walletConnect({ projectId })],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  },
});
