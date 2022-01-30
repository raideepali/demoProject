import { combineReducers } from 'redux';
import reducerCategories from './demoproject/reducers/reducerCategories';

const appReducer = combineReducers({
    reducerCategories
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
