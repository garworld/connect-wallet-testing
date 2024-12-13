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

const Dropdown = ({ onSelect, items, selectedItem, mode, setShowModal }) => {
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

  const WalletOptions = () => {
    return (
      <StyledDropdown width={width}>
        <button
          className={`clickable ${isConnected ? 'connected' : null}`}
          onClick={() => {
            if (!isConnected) {
              // Jika belum terkoneksi, langsung connect ke connector index 0
              connect({ connector: connectors[0] });
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
