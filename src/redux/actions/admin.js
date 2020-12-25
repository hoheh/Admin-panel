import axios from 'axios';

export const SETADMIN = 'SET_ADMIN';
export const GETMOREDATA = 'GET_MORE_DATA';
export const DELETECURRENTDATA = 'DELETE_CURRENT_DATA';
export const UPDCURRENTDATA = 'UPD_CURRENT_DATA';
export const SENDNEWDATA = 'SEND_NEW_DATA';

const setAdminData = ({ products, filters }) => ({
  type: SETADMIN,
  products,
  filters,
});

const removeCurrentData = ({ _id }) => ({
  type: DELETECURRENTDATA,
  _id,
});

const updCurrentData = (obj) => ({
  type: UPDCURRENTDATA,
  obj,
});

const sendNewData = (obj) => ({
  type: SENDNEWDATA,
  obj,
});

export const fetchData = () => (dispatch) => {
  axios.post('http://localhost:3003/api/admin/').then(({ data }) => {
    dispatch(setAdminData(data));
  });
};

export const removeDataAdmin = (obj) => (dispatch) => {
  axios
    .delete(`http://localhost:3003/api/admin/products?id=${obj._id}`)
    .then(({ data }) => {
      console.log(data, obj);
      dispatch(removeCurrentData(obj));
    });
};

export const fetchUpdCurrentData = (obj) => (dispatch) => {
  axios
    .patch(`http://localhost:3003/api/admin/products?id=${obj._id}`, obj)
    .then(({ data }) => {
      console.log(data);
      dispatch(updCurrentData(obj));
    });
};

export const postNewData = (formData, input) => (dispatch) => {
  // axios.post(`http://localhost:3003/api/admin/products`, formData).then(({ data }) => {
  //   console.log(data);
  // });
  console.log(formData, input);
};
