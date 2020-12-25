import React, { useReducer, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// import { useDispatch } from 'react-redux';
// import { postNewData } from '../../redux/actions/admin';

const NewPopup = ({ currentData, manufactured, types, handleUpdateData }) => {
  return (
    <div className="modal">
      <div className="popup">
        {currentData.length > 0 ? (
          <div>
            <select>
              {manufactured.map((item, index) => {
                return (
                  <option value={item._id} key={`${item._id}_${index}`}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <select>
              {types.map((item, index) => {
                return (
                  <option value={item._id} key={`${item._id}_${index}`}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <button>Click for update</button>
          </div>
        ) : (
          <div>
            <input type="text" placeholder="Title" name="title" />
            <input type="number" placeholder="Price" name="price" />
            <input type="text" placeholder="Description" name="description" />
            <input type="file" name="imageUrl" />
            <select name="manufacture">
              {manufactured.map((item, index) => {
                return (
                  <option value={item._id} key={`${item._id}_${index}`}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <select name="type">
              {types.map((item, index) => {
                return (
                  <option value={item._id} key={`${item._id}_${index}`}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <button onClick={}>Click for add new item</button>
          </div>
        )}
      </div>
    </div>
  );
};

NewPopup.propTypes = {
  currentData: PropTypes.array,
  manufactured: PropTypes.array,
  types: PropTypes.array,
};

NewPopup.defaultProps = {
  currentData: {},
  manufactured: {},
  types: {},
};

export default NewPopup;
