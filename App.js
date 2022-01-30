import React from 'react';
 import {Provider} from 'react-redux';
import ScreenDemo from './src/screens/ScreenDemo'
import store from './src/services/redux/store';

export default function App() {
 return(
     <Provider store={store}>
      <ScreenDemo/>
     </Provider>
  )
}