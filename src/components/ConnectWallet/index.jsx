import { useAccount, useConnect } from 'wagmi';
import icons from '../../assets/icons';
import images from '../../assets/images';
import UseScreenSize from '../../helpers/UseScreenSize';
import { StyledConnectWallet } from '../../styled';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { injected, walletConnect } from 'wagmi/connectors';

function ConnectWallet() {
  const { width } = UseScreenSize();
  const nav = useNavigate();
  const projectId = import.meta.env.VITE_PROJECT_ID;

  // connect wallet
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

  //check connected account
  useEffect(() => {
    if (isConnected) {
      nav('/');
    }
  }, [isConnected]);

  // device checker
  const walletChecker = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log({ isMobile });

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

  return (
    <StyledConnectWallet
      union={images.union}
      unionBorder={images.unionBorder}
      subtract={images.subtract}
      ellipse={images.ellipse}
      groupImage={images.groupImage}
      width={width}
    >
      <div className="content">
        <div className="big-title">
          <p className="main-title">
            Introducing <span>ELVT</span> Token
          </p>
          <p className="sub-title">
            Earn governance rights and staking rewards
          </p>
        </div>
        <div className="union-group">
          {/* <div className="subtract"></div> */}
          {/* <div className="traps"></div> */}
          <div className="border">
            <div
              className="connect-button clickable"
              onClick={() => {
                walletChecker();
              }}
            >
              <p>Connect Wallet</p>
              <img src={icons.arrowRight} />
            </div>
          </div>
          <div className="ellipse">
            <img src={images.elevateGlass} />
          </div>
          {width > 850 && (
            <div className="warning">
              Check your received airdrop tokens by connecting your wallet
            </div>
          )}
          {width <= 850 && (
            <div className="warning">
              Check your received airdrop tokens by connecting your wallet
            </div>
          )}
        </div>
      </div>
    </StyledConnectWallet>
  );
}

export default ConnectWallet;
