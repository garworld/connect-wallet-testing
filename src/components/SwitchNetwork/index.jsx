import icons from '../../assets/icons';
import images from '../../assets/images';
import UseScreenSize from '../../helpers/UseScreenSize';
import { StyledConnectWallet } from '../../styled';

function SwitchNetwork(props) {
  const { width } = UseScreenSize();

  return (
    <StyledConnectWallet
      union={images.union}
      unionBorder={images.unionBorder}
      subtract={images.subtract}
      ellipse={images.ellipse}
      redEllipse={images.redEllipse}
      groupImage={images.groupImage}
      mode={props.mode}
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
            <div className="switch-button clickable">
              <p>Switch Network</p>
              <div className="icon">
                <img style={{ rotate: '180deg' }} src={icons.arrowRight} />
                <img src={icons.arrowRight} />
              </div>
            </div>
          </div>
          <div className="ellipse">
            {props.mode === 'switch' ? null : <img src={images.elevateGlass} />}
          </div>
          {width > 850 && (
            <div className="warning">
              <div className="icon">
                <img src={icons.alertCircle} />
              </div>
              <p>Please make sure that you are on Base Network</p>
            </div>
          )}

          {width <= 850 && (
            <div className="warning">
              <div className="icon">
                <img src={icons.alertCircle} />
              </div>
              <p>Please make sure that you are on Base Network</p>
            </div>
          )}
        </div>
      </div>
    </StyledConnectWallet>
  );
}

export default SwitchNetwork;
