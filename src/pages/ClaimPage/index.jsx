import ClaimToken from '../../components/ClaimToken';
import ConnectWallet from '../../components/ConnectWallet';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';

function ClaimPage() {
  return (
    <Container>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 5,
        }}
      >
        <Navbar />
      </div>
      <ClaimToken mode={'claim'} />
    </Container>
  );
}

export default ClaimPage;
