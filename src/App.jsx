import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SwitchPage from './pages/SwitchPage';
import ClaimPage from './pages/ClaimPage';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { arbitrum, avalanche, base, mainnet, sepolia } from 'wagmi/chains';
import {
  coinbaseWallet,
  injected,
  metaMask,
  safe,
  walletConnect,
} from 'wagmi/connectors';
import { config } from './config';

function App() {
  const routeList = [
    { path: '/connect-wallet', element: <MainPage /> },
    { path: '/switch-network', element: <SwitchPage /> },
    { path: '/claim-token', element: <ClaimPage /> },
  ];

  // const projectId = '1ee28ba8e4c0e9e774e13e7db4cfafb6';

  // const config = createConfig({
  //   autoConnect: true,
  //   chains: [sepolia],
  //   connectors: [
  //     injected(),
  //     // metaMask(),
  //     // safe(),
  //     // coinbaseWallet(),
  //     // walletConnect({ projectId }),
  //   ],
  //   transports: {
  //     // [mainnet.id]: http(),
  //     // [arbitrum.id]: http(),
  //     // [avalanche.id]: http(),
  //     // [base.id]: http(),
  //     [sepolia.id]: http(),
  //   },
  // });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {routeList.map((el) => (
              <Route key={el.path} path={el.path} element={el.element} />
            ))}
          </Routes>
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
