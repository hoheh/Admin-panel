import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { postNewData } from '../../redux/actions/admin';

const NewPopup = ({ currentData, manufactured, types }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    type: '',
    description: '',
    price: 0,
    manufacture: '',
    imageUrl: {},
    application: '',
    favorite: false,
  });

  const handleChange = ({ target }) => {
    setState((prevState) => ({
      ...prevState,
      [target.name]:
        target.type === 'checkbox'
          ? target.checked
          : target.files
          ? target.files[0]
          : target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postNewData(state));
  };

  return (
    <div className="modal">
      <div className="popup">
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          encType="multipart/form-data">
          <input type="text" placeholder="Title" name="title" />
          <input type="number" placeholder="Price" name="price" />
          <input type="text" placeholder="Description" name="description" />
          <input type="checkbox" placeholder="Favorite" name="favorite" />
          <input type="text" placeholder="Application" name="application" />
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
          <input type="submit" value="Create new item" />
        </form>
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
