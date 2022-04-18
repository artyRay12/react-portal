import React from 'react'
import styles from './Modal.module.scss'
import ReactDOM from 'react-dom';

/* eslint-disable */
export interface CommonProps {
    className?: string;
    value?: boolean;
    onClose: (args?: any) => void;
    isOpen?: boolean;
    children: React.ReactNode;
  };
  
  const Popup: React.FC<CommonProps> = ({ children, onClose }) => {
    return (
      <div className={styles.popup}>
        <div className={styles.popup__overflow} />
        <div className={styles.popup__container}>
          <button className={styles.popup__close} onClick={() => onClose(false)}>X</button>
          <div className={styles.popup__content}>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  const PopupWrapper: React.FC<CommonProps> = ({ children, isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }
    const modalRoot = document.getElementById('modal')!;
    return ReactDOM.createPortal(    
    <div className={styles.modal}>
        <Popup onClose={onClose}>{children}</Popup>
    </div>,
    modalRoot);
  };
  
  export default PopupWrapper;
  