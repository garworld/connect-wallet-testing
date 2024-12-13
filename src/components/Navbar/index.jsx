import { useState } from 'react';
import images from '../../assets/images';
import { StyledNavbar, StyledOptionMenu } from '../../styled';
import icons from '../../assets/icons';
import { useAccount, useConnect, useEnsName } from 'wagmi';
import Dropdown from '../Dropdown';
import UseScreenSize from '../../helpers/UseScreenSize';
import CustomModal from '../CustomModal';

function Navbar(props) {
  const { width } = UseScreenSize();
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const redirectToDiscord = () => {
    window.open('https://discord.gg/relaychain', '_blank');
  };

  const WebNavbar = () => {
    return (
      <StyledNavbar width={width}>
        <img height={'34px'} width={'136px'} src={images.elevateLogo} />
        <div className="navbar-menu">
          <div
            onClick={() => setShowTermsModal(true)}
            style={{ cursor: 'pointer' }}
          >
            Airdrop Terms & Conditions
          </div>
          <div onClick={redirectToDiscord} style={{ cursor: 'pointer' }}>
            Questions?
          </div>
          <Dropdown mode={props.mode} />
        </div>
      </StyledNavbar>
    );
  };

  const TokenNavbar = () => {
    return (
      <StyledNavbar width={width} className="mobile-navbar">
        <img
          height={'15px'}
          src={icons.menu}
          onClick={() => {
            setShowModal('menu');
            setIsOpen(!isOpen);
          }}
        />
        <img height={'25px'} src={images.elevateLogo} />
        <div className="connect-button">
          <img src={icons.link} />
        </div>
        {/* OPTION MENU */}
        <CustomModal
          showModal={showModal == 'menu'}
          setShowModal={() => setShowModal(false)}
        >
          <StyledOptionMenu isOpen={isOpen}>
            <div
              style={{
                width: '100%',
                maxWidth: '430px',
              }}
            >
              <div className="content">
                <img src={images.elevateLogo} />
                <div className="options">
                  <div
                    className="item clickable"
                    onClick={() => setShowTermsModal(true)}
                    style={{ cursor: 'pointer' }}
                  >
                    Airdrop Terms & Conditions
                  </div>
                  <div
                    className="item clickable"
                    onClick={redirectToDiscord}
                    style={{ cursor: 'pointer' }}
                  >
                    Questions?
                  </div>
                  <Dropdown setShowModal={setShowModal} />
                </div>
              </div>
              <div className="close">
                <img
                  src={icons.closeMenu}
                  onClick={() => setShowModal(false)}
                />
              </div>
            </div>
          </StyledOptionMenu>
        </CustomModal>
      </StyledNavbar>
    );
  };

  const TermsModal = () => {
    return (
      <CustomModal
        showModal={showTermsModal}
        setShowModal={() => setShowTermsModal(false)}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparansi latar belakang
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'left',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <h3>Terms & Conditions</h3>
            <ul>
              <li>
                The snapshot was taken at Block 198073810, prior to the exploit
                on the Arbitrum network at Block Number 198073811 (April 6,
                2024, 04:44:48 AM UTC).
              </li>
              <li>
                The snapshot included all chains and covered all address types
                (wallets, staking contracts, liquidity pool (LP) contracts, and
                farming contracts) simultaneously.
              </li>
              <li>
                LP tokens were converted into Relay tokens based on the
                liquidity positions at the time of the snapshot.
              </li>
              <li>
                The airdrop received by individual wallets will reflect the
                cumulative total from all chains and address types with which
                they are associated.
              </li>
            </ul>
            <button
              onClick={() => setShowTermsModal(false)}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                background: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      </CustomModal>
    );
  };

  return (
    <>
      {width <= 850 ? TokenNavbar() : WebNavbar()}
      {showTermsModal && TermsModal()}
    </>
  );
}

export default Navbar;
