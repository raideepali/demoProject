
import React, { useEffect } from 'react';
import { Text,View} from 'react-native';
import styles from '../styles/StylesComponentCategoriesView'
import ComponentCategories from './ComponentCategories';
import { fetchCategories } from '../../services/redux/demoproject/actions/actionCategories';
import { useDispatch,useSelector } from 'react-redux';

const ComponentCategoriesView = () => {
  const dispatch =  useDispatch()
  useEffect(()=>{
  dispatch(fetchCategories());
  },[])
  const mState = useSelector((state)=>state.reducerCategories)
  const {categoriesData} = mState;
  return (
      <View style={styles.mBottom}>
        <View style={styles.container}>
        <Text style={styles.text1}>Categories</Text>
        <Text style={styles.text2}>View All</Text>
        </View>
      {categoriesData?.map((item)=> <ComponentCategories item={item} key={item.id}/>)}
      </View>
  );
};


export default ComponentCategoriesView;