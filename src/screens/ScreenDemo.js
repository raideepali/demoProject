
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './StylesScreenDemo'
import ComponentCarousel from '../components/subcomponents/ComponentCarousel';
import ComponentHeader from '../components/subcomponents/ComponentHeader';
import ComponentOrders from '../components/subcomponents/ComponentOrders';
import ComponentCategoriesView from '../components/subcomponents/ComponentCategoriesView';


const ScreenDemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ComponentHeader/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ComponentCarousel/>
      <ComponentOrders/>
      <ComponentCategoriesView/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default ScreenDemo;