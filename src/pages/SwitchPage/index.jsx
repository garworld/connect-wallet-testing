import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import SwitchNetwork from '../../components/SwitchNetwork';

function SwitchPage() {
  return (
    <Container>
      <div style={{ position: 'sticky', top: 0, zIndex: 5 }}>
        <Navbar mode={'switch'} />
      </div>
      <SwitchNetwork mode={'switch'} />
    </Container>
  );
}

export default SwitchPage;
