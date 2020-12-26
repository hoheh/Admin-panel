import React, { useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { postNewData } from '../../redux/actions/admin';

const NewPopup = ({ currentData, manufactured, types, handleUpdateData }) => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleChangeFile = ({ target }) => {
    setState(target.files[0]);
  };

  return (
    <div className="modal">
      <div className="popup">
        <div>
          <input type="text" />
          <input type="file" onChange={handleChangeFile} />
          <button
            onClick={() => {
              dispatch(postNewData(state));
            }}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

NewPopup.propTypes = {
  currentData: PropTypes.object,
  manufactured: PropTypes.array,
  types: PropTypes.array,
};

NewPopup.defaultProps = {
  currentData: {},
  manufactured: [],
  types: [],
};

export default NewPopup;
