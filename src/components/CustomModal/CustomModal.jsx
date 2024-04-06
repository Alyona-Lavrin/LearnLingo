import PropTypes from 'prop-types';
import Modal from "react-modal";
import { X } from "lucide-react";
import { CloseBtn, ModalWrap } from "./Modal.styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 30,
  },
  overlay: {
    backgroundColor: "#12141780",
  },
};

export const CustomModal = ({ modalIsOpen, closeModal, children }) => {
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={450}
    >
      <ModalWrap>
        <CloseBtn onClick={closeModal}>
          <X size={32} />
        </CloseBtn>
        {children}
      </ModalWrap>
    </Modal>
  );
};

CustomModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.any,
};