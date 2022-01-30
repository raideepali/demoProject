import {
    FETCH_CATEGORIES,FETCH_CATEGORIES_ERROR,FETCHED_CATEGORIES
  } from '../actions/actionCategories';
  
  const initialState = {
    categoriesData: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_CATEGORIES:
        return {
          ...state,
        };
      case FETCHED_CATEGORIES:
        return {
          ...state,
          categoriesData: action.payload.data,
        };
      case FETCH_CATEGORIES_ERROR:
        return {
          ...state,
          categoriesData:[]
        };
      default:
        return state;
    }
  }
  