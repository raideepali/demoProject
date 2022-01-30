import React from 'react';
import {
    Image, Text, View, ImageBackground
  } from 'react-native';
import styles from '../styles/StylesComponentCategories';
import {backGroundImage,banner2} from '../../assets/imageData'
  
const ComponentCategories = ({item}) => {

if(item.id%2===0)return(                            
  <View style={styles.secondContainer} >
  <ImageBackground source={backGroundImage} style={styles.image1}>
  <View style={styles.mainContainer}>
  <Text style={styles.itemName}>Joint Care</Text>
     <View style={styles.rowStyle}>
     <View style={styles.itemNameContainer}>
       <Text style={[styles.itemName,styles.customImage1]}>{item.body}</Text>
     </View>
     <Image source={banner2} style={[styles.imageStyle,styles.customImage1]}/>
     </View>
  </View>
  </ImageBackground>
</View>
)

return (
  <View style={styles.container} >
  <ImageBackground source={backGroundImage} style={styles.image2}>
    <View style={styles.mainContainer}>
      <Text style={styles.itemName}>Joint Care</Text>
     <View style={styles.rowStyle}>
      <Image source={banner2} style={[styles.imageStyle,styles.customImage2]}/>
      <View style={styles.itemNameContainer}>
        <Text style={[styles.itemName,styles.customImage2]}>{item.body}</Text>
      </View>
      </View>
      </View>
    </ImageBackground>
    </View>
      );
  };
  
  export default ComponentCategories;
  