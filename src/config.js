import { http, createConfig, injected } from '@wagmi/core';
import { mainnet, sepolia } from '@wagmi/core/chains';
import { walletConnect } from 'wagmi/connectors';

const projectId = '1ee28ba8e4c0e9e774e13e7db4cfafb6';

export const config = createConfig({
  autoConnect: true,
  chains: [sepolia],
  connectors: [injected(), walletConnect({ projectId })],
  transports: {
    [sepolia.id]: http(),
  },
});
