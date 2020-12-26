import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData, removeDataAdmin } from '../redux/actions/admin';

import { NewPopup } from '../components';

import './index.scss';

const Home = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentData, setCurrentData] = React.useState({});

  const dispatch = useDispatch();
  const { filters, products, isLoaded } = useSelector(({ data }) => data);

  const selectCurrentData = (currentItem) => {
    setCurrentData((prevState) => ({ ...prevState, ...currentItem }));
    setPopupVisible(true);
  };

  const removeCurrentData = (item) => {
    dispatch(removeDataAdmin(item));
  };

  const handleClick = () => {
    setPopupVisible(true);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <ul>
        {isLoaded &&
          products.items.map((item, index) => {
            return (
              <li key={`${item._id}_${index}`}>
                {item.title}
                <button onClick={() => removeCurrentData(item)}>Remove</button>
                <button onClick={() => selectCurrentData(item)}>Update</button>
              </li>
            );
          })}
      </ul>
      <button onClick={handleClick}>Click for add new data</button>
      {popupVisible && <NewPopup currentData={currentData} {...filters} />}
    </div>
  );
};

export default Home;
