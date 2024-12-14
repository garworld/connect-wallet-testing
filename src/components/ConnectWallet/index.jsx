import { useAccount, useConnect } from 'wagmi';
import icons from '../../assets/icons';
import images from '../../assets/images';
import UseScreenSize from '../../helpers/UseScreenSize';
import { StyledConnectWallet } from '../../styled';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ConnectWallet() {
  const { width } = UseScreenSize();
  const nav = useNavigate();

  // connect wallet
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

  //check connected account
  useEffect(() => {
    if (isConnected) {
      nav('/');
    }
  }, [isConnected]);

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
                connect({ connector: connectors[0] });
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
              Check your eligible token to claim by connecting your wallet
            </div>
          )}
          {width <= 850 && (
            <div className="warning">
              Check your eligible token to claim by connecting your wallet
            </div>
          )}
        </div>
      </div>
    </StyledConnectWallet>
  );
}

export default ConnectWallet;
