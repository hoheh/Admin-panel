import axios from 'axios';

export const SETADMIN = 'SET_ADMIN';
export const GETMOREDATA = 'GET_MORE_DATA';
export const DELETECURRENTDATA = 'DELETE_CURRENT_DATA';
export const UPDCURRENTDATA = 'UPD_CURRENT_DATA';
export const SENDNEWDATA = 'SEND_NEW_DATA';

// * Получение значений с сервера

const setAdminData = ({ products, filters }) => ({
  type: SETADMIN,
  products,
  filters,
});
export const fetchData = () => (dispatch) => {
  axios.post('http://localhost:3003/api/admin/').then(({ data }) => {
    dispatch(setAdminData(data));
  });
};

// * POST запрос на добавление нового значения

const sendNewData = (obj) => ({
  type: SENDNEWDATA,
  obj,
});
export const postNewData = (data) => (dispatch) => {
  let formData = new FormData();
  for (let key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  axios.post(`http://localhost:3003/api/admin/products`, formData).then(({ data }) => {
    console.log(data);
    dispatch(sendNewData(data));
  });
};

// * PATCH запрос на обновление

const updCurrentData = (obj) => ({
  type: UPDCURRENTDATA,
  obj,
});
export const fetchUpdCurrentData = (obj) => (dispatch) => {
  axios
    .patch(`http://localhost:3003/api/admin/products?id=${obj._id}`, obj)
    .then(({ data }) => {
      console.log(data);
      dispatch(updCurrentData(obj));
    });
};

// * DELETE запрос на удаление

const removeCurrentData = ({ _id }) => ({
  type: DELETECURRENTDATA,
  _id,
});
export const removeDataAdmin = (obj) => (dispatch) => {
  axios
    .delete(`http://localhost:3003/api/admin/products?id=${obj._id}`)
    .then(({ data }) => {
      console.log(data, obj);
      dispatch(removeCurrentData(obj));
    });
};
