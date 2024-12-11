import { useState } from 'react';
import images from '../../assets/images';
import { StyledNavbar, StyledOptionMenu } from '../../Styled';
import icons from '../../assets/icons';
import { useAccount, useConnect, useEnsName } from 'wagmi';
import Dropdown from '../Dropdown';
import UseScreenSize from '../../helpers/UseScreenSize';
import CustomModal from '../CustomModal';

function Navbar(props) {
  const { width } = UseScreenSize();
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const WebNavbar = () => {
    return (
      <StyledNavbar width={width}>
        <img height={'34px'} width={'136px'} src={images.elevateLogo} />
        <div className="navbar-menu">
          <div>Airdrop Terms & Conditions</div>
          <div>Questions?</div>
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
                  <div className="item clicakble">
                    Airdrop Terms & Conditions
                  </div>
                  <div className="item clickable">Questions?</div>
                  <Dropdown />
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

  if (width <= 850) {
    return TokenNavbar();
  } else {
    return WebNavbar();
  }
}

export default Navbar;
