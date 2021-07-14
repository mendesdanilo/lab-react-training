import React from 'react';
import PropTypes from 'prop-types';

function Greetings({ lang, children }) {
  let greeting = '';
  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'en') {
    greeting = 'Hello';
  } else if (lang === 'es') {
    greeting = 'Hola';
  } else {
    greeting = 'Bonjour';
  }

  return (
    <>
      <div>
        <p>
          {' '}
          {greeting} {children}
        </p>
      </div>
    </>
  );
}

Greetings.propTypes = {
  lang: PropTypes.string,
};

export default Greetings;
