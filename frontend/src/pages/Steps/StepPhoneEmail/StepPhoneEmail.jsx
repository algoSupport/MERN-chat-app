// Import
import React, { useState } from 'react';
import Email from './Email/Email';
import Phone from './Phone/Phone';
import styles from './StepPhoneEmail.module.css';

const PhonEmailMap = {
  phone: Phone,
  email: Email,
};

// StepPhoneEmail Component
const StepPhoneEmail = ({ onNext }) => {
  // local state
  const [type, setType] = useState('phone');

  // storing steps in a variable
  const Component = PhonEmailMap[type];
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button
              className={`${styles.tabButton} ${
                type === 'phone' ? styles.active : ''
              }`}
              onClick={() => setType('phone')}
            >
              <img src="/images/phone-white.png" alt="phone" />
            </button>
            <button
              className={`${styles.tabButton} ${
                type === 'email' ? styles.active : ''
              }`}
              onClick={() => setType('email')}
            >
              <img src="/images/email-white.png" alt="email" />
            </button>
          </div>

          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

// Export
export default StepPhoneEmail;
