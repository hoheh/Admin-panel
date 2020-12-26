import {
  SETADMIN,
  GETMOREDATA,
  DELETECURRENTDATA,
  UPDCURRENTDATA,
} from '../actions/admin';

const initialState = {
  products: {
    count: 0,
    items: [],
  },
  filters: {
    types: [],
    manufactured: [],
  },
  gallery: [],
  isLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case SETADMIN:
      return {
        ...state,
        products: {
          items: action.products.items,
          count: action.products.count,
        },
        filters: action.filters,
        gallery: action.gallery,
        isLoaded: true,
      };
    case GETMOREDATA:
      return {
        ...state,
        products: {
          ...state.products,
          items: [...state.products.items, ...action.products.items],
        },
        page: action.page,
      };
    case DELETECURRENTDATA:
      return {
        ...state,
        products: {
          items: state.products.items.filter((item) => item._id !== action._id),
          count: state.products.count--,
        },
      };
    case UPDCURRENTDATA:
      return {
        ...state,
        products: {
          ...state.products,
          items: state.products.items.map((item) => {
            return item._id === action.obj._id ? action.obj : item;
          }),
        },
      };
    default:
      return state;
  }
};

export default data;
