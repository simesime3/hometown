import React from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <button className={styles['modal-close']} onClick={onClose}>×</button>
        <div className={styles['modal-header']}>
          <h2>{data.title}</h2>
        </div>
        <div className={styles['modal-body']}>
          <button className={styles['modal-button']}>{data.button1}</button>
          <button className={styles['modal-button']}>{data.button2}</button>
          <button className={styles['modal-button']}>{data.button3}</button>
          <button className={styles['modal-button']}>{data.button4}</button>
        </div>
        <div className={styles['modal-footer']}>
          <p>{data.supportCount}</p>
          <button className={styles['modal-support-button']}>{data.supportButton}</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;