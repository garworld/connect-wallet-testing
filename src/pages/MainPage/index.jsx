import ConnectWallet from '../../components/ConnectWallet';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';

function MainPage() {
  return (
    <Container>
      <div style={{ position: 'sticky', top: 0, zIndex: 5 }}>
        <Navbar />
      </div>
      <ConnectWallet />
    </Container>
  );
}

export default MainPage;
