import {
  SETADMIN,
  GETMOREDATA,
  DELETECURRENTDATA,
  UPDCURRENTDATA,
  SENDNEWDATA,
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
          items: state.products.items.find((item) => item._id !== action._id),
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
    case SENDNEWDATA:
      return {
        ...state,
        products: {
          items: [...state.products.items, action.obj],
          count: state.products.count++,
        },
      };
    default:
      return state;
  }
};

export default data;
