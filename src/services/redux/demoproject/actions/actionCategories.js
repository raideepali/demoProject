export const MODULE_KEY = 'categories';
export const FETCH_CATEGORIES = `${MODULE_KEY}_fetch_categories`;
export const FETCHED_CATEGORIES = `${MODULE_KEY}_fetched_categories`;
export const FETCH_CATEGORIES_ERROR = `${MODULE_KEY}_fetch_categories_error`

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
  payload: { },
});

export const fetchedCategories = ({ status, data }) => ({
  type: status ? FETCHED_CATEGORIES : FETCH_CATEGORIES_ERROR,
  payload: { data },
});

