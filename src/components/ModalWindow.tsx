// ModalWindow.tsx
import React, { useState } from 'react';

const ModalWindow: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

  return (
      <div>
           <button id="modalOpenButton" onClick={handleOpenModal}>Open Modal</button>
           {isModalOpen &&
            <div id="modalOverlay" style={styles.modalOverlay}>
              <div id="modalContent" style={styles.modalContent}>
                <h2 id="modalHeading">Modal Content</h2>
                <p id="modalParagraph">This is the content of the modal window.</p>
                <button onClick={handleCloseModal} id="modalCloseButton">Close Modal</button>
              </div>
            </div>
            }
      </div>
  );
};

interface Styles {
  modalOverlay: React.CSSProperties;
  modalContent: React.CSSProperties;
}

const styles: Styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  }
};

export { ModalWindow };
