import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData, removeDataAdmin } from '../redux/actions/admin';

import { NewPopup } from '../components';

import './index.scss';

const Home = () => {
  const dispatch = useDispatch();

  const { filters, products, gallery, isLoaded } = useSelector(({ data }) => data);

  const [popupVisible, setPopupVisible] = useState(false);
  const [currentData, setCurrentData] = React.useState({});

  const filtersHeading = ['Произоводители', 'Типы'];
  const galleryHeading = ['Причёски', 'Окрашивание', 'Зизи косички'];

  const getData = (headings, obj) => {
    return headings.map((el, index) => {
      return {
        [index]: {
          item: Object.values(obj)[index],
          heading: el,
        },
      };
    });
  };

  const galleryFilter = (arr) => {
    const obj = {};
    for (let i = 0; i < 3; i++) {
      obj[i] = arr.filter((el) => el.type === i);
    }

    return obj;
  };

  console.log(getData(galleryHeading, galleryFilter(gallery)));

  const reducer = (state, action) => {
    switch (action.type) {
      case 'PRODUCTS':
        return {
          products: {
            isProduct: true,
            items: products.items,
            count: products.count,
            heading: 'Товары',
          },
        };
      case 'FILTERS':
        return {
          ...getData(filtersHeading, filters),
        };
      case 'GALLERY':
        return {
          ...getData(galleryHeading, galleryFilter(gallery)),
        };
    }
  };

  const selectCurrentData = (currentItem) => {
    setCurrentData((prevState) => ({ ...prevState, ...currentItem }));
    setPopupVisible(true);
  };

  const handleUpdateData = () => {};

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
      {popupVisible && (
        <NewPopup
          handleUpdateData={handleUpdateData}
          currentData={currentData}
          {...filters}
        />
      )}
    </div>
  );
};

export default Home;
