import React, { useReducer, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { postNewData } from '../../redux/actions/admin';

const regexp = /^(\-|\+)?([0-9]+|Infinity)$/;

const initializeState = () => ({
  
});
const initialState = {};
const reducer = (state, action) => {
  switch (action) {
    case 'current_data':
      return {};
    case 'new_data':
      return {};
  }
};

const NewPopup = ({ currentData, manufactured, types }) => {
  // const ref = useRef();
  const [state, dispatch] = useReducer(reducer, initialState, initializeState);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    type: '',
    manufacture: '',
    title: '',
    description: '',
    price: 0,
    imageUrl: '',
    favorite: false,
  });

  // const clickForUpdateSubmit = (item) => {};

  // const clickForAddSubmit = (event) => {
  //   event.preventDefault();
  // };

  const handleChange = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: regexp.test(event.target.value)
        ? Number(event.target.value)
        : event.target.value,
    }));
  };

  useEffect(() => {
    if (currentData.length > 0) {
      setInput(currentData[0]);
    }
  }, []);

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
          <form onSubmit={clickForAddSubmit} encType="multipart/form-data">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Title"
              value={input.title}
              name="title"
            />
            <input
              type="number"
              onChange={handleChange}
              placeholder="Price"
              value={input.price}
              name="price"
            />
            <input
              type="text"
              placeholder="Description"
              onChange={handleChange}
              value={input.description}
              name="description"
            />
            <input type="file" name="imageUrl" onChange={handleChange} ref={ref} />
            <select value={input.manufacture} name="manufacture" onChange={handleChange}>
              {manufactured.map((item, index) => {
                return (
                  <option value={item._id} key={`${item._id}_${index}`}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <select value={input.type} name="type" onChange={handleChange}>
              {types.map((item, index) => {
                return (
                  <option value={item._id} key={`${item._id}_${index}`}>
                    {item.title}
                  </option>
                );
              })}
            </select>
            <input type="submit" value="Click for add new item" />
          </form>
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

export default NewPopup;
