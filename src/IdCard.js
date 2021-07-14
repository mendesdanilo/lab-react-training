import React from 'react';
import PropTypes from 'prop-types';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <>
      <div>
        <p>
          <img src={picture} />
        </p>
      </div>
      <div>
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toLocaleString()}</p>
      </div>
    </>
  );
}
IdCard.propTypes = {
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.number,
  birth: PropTypes.string,
  picture: PropTypes.string,
};

export default IdCard;
