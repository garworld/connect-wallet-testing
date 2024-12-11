import { Modal, Slide } from '@mui/material';

function CustomModal({ children, showModal, setShowModal }) {
  return (
    <Modal
      className="StyledOptionMenu"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={showModal != false}
      onClose={() => setShowModal(false)}
      closeAfterTransition
    >
      <Slide in={showModal} direction="down" timeout={500}>
        {children}
      </Slide>
    </Modal>
  );
}

export default CustomModal;
