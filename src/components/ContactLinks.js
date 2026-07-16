import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:saileshmaharjan9102@gmail.com"
        >
          saileshmaharjan9102@gmail.com
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/sailesh-maharjan-215617380/"
        >
          LinkedIn
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/SayLess-X"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </span>
    </div>
  );
};

export default ContactLinks;
