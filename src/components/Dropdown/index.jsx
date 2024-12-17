import { useEffect, useState } from 'react';
import { StyledDropdown } from '../../styled';
import { useDetectClickOutside } from 'react-detect-click-outside';
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi';
import icons from '../../assets/icons';
import UseScreenSize from '../../helpers/UseScreenSize';
import { useWalletStore } from '../../hooks/useStore';
import { injected, walletConnect } from 'wagmi/connectors';

const Dropdown = ({ onSelect, items, selectedItem, mode, setShowModal }) => {
  const projectId = import.meta.env.VITE_PROJECT_ID;
  const [show, setShow] = useState(false);
  const { width } = UseScreenSize();
  const ref = useDetectClickOutside({
    onTriggered: () => (show ? setShow(false) : null),
  });
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ ensName });
  const { connect, connectors } = useConnect();
  const { data: balanceData, isError, isLoading } = useBalance({ address });

  // truncate address
  const truncatedAddress = (wallet_address) => {
    const trucated = wallet_address.split('');
    const result = `${trucated.splice(0, 6).join('')}..${trucated
      .slice(-4)
      .join('')}`;
    return result;
  };

  // device checker
  const walletChecker = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // console.log({ isMobile });

    if (isMobile) {
      connect({ connector: walletConnect({ projectId }) });
    } else {
      // console.log(window.ethereum);

      if (typeof window.ethereum !== 'undefined') {
        connect({ connector: injected() });
      } else {
        connect({ connector: walletConnect({ projectId }) });
      }
    }
  };

  const WalletOptions = () => {
    return (
      <StyledDropdown width={width}>
        <button
          className={`clickable ${isConnected ? 'connected' : null}`}
          onClick={() => {
            if (!isConnected) {
              // Jika belum terkoneksi, langsung connect ke connector index 0
              walletChecker();
              setShowModal('false');
            } else {
              // Jika sudah terkoneksi, toggle dropdown
              setShow(!show);
            }
          }}
        >
          {isConnected ? (
            <div className="button-connected">
              <img src={ensAvatar} />
              <p>{truncatedAddress(address)}</p>
              <img src={icons.arrowDown} style={{ width: '20px' }} />
            </div>
          ) : mode === 'switch' ? (
            'Switch Network'
          ) : (
            'Connect Wallet'
          )}
        </button>
        <div>
          <div className="dropdown-wrapper">
            <ul className={show ? 'active' : ''}>
              {isConnected ? (
                <>
                  <li>Balance: {balanceData?.formatted}</li>
                  <li
                    onClick={() => {
                      disconnect();
                      setShow(!show);
                    }}
                  >
                    Disconnect
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </StyledDropdown>
    );
  };
  return WalletOptions();
};

export default Dropdown;
