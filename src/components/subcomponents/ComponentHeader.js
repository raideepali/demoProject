
import React from 'react';
import { Image, View } from 'react-native';
import styles from '../styles/StylesComponentHeader';
import {headerImage} from '../../assets/imageData'
import Icon from 'react-native-vector-icons/dist/Feather';

const ComponentHeader = () => {
  return (
    <View style={styles.container}>
    <Image source={headerImage} resizeMode='contain' style={styles.imageStyle}/>
    <View style={styles.iconStyle}>
    <Icon name="align-right" size={30} color="#009999"/>
   </View>
    </View>
  );
};


export default ComponentHeader;