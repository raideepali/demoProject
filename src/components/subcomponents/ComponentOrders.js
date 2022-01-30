import React from 'react';
  import {
    Image, Text, View, ScrollView
  } from 'react-native';
import { OrderData } from '../../constants/DummyData';
  import styles from '../styles/StylesComponentOrders';
  import Icon from 'react-native-vector-icons/dist/FontAwesome';
  
  const ComponentOrders = () => {
    const CardView = ({item}) =>{
      return (
          <View style={styles.container} >
            <View style={styles.mainContainer}>
              <View style={styles.itemNameContainer}>
              <View style={styles.iconStyle}>
              <Icon name={item.imageUrl} size={20} color="white" />
              </View>
                <Text style={styles.itemName}>{item.title}</Text>
              </View>
            </View>
          </View>
      );
    }
    return(
      <View style={styles.subContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.orederItem}>
        {OrderData?.map((item)=><CardView item={item} key={item.id}/>)}
        </View>
      </ScrollView>
      </View>
    )
  };
  
  export default ComponentOrders;
  