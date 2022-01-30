import React, { useState } from 'react';
import { View,Dimensions,Image ,Text } from 'react-native';
import Carousel , { Pagination } from 'react-native-snap-carousel';
import styles from '../styles/StylesComponentCarousel';
import { imageData } from '../../constants/ImageConstants';

const screenWidth = Dimensions.get('window').width

const ComponentCarousel = () => {
 const [indexVal,setIndex]= useState(0)

 const DotView = ({activeSlide}) => {
    return (    
    <Pagination
    dotsLength={3}
    activeDotIndex={activeSlide}
    containerStyle={{ backgroundColor: 'white' }}
    dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'green',
    }}
    inactiveDotOpacity={0.4}
    inactiveDotScale={0.6}
  />
);
}
  return (
      <View style={styles.container}>
        <Text style={styles.text1}>Hello there,</Text>
        <Text style={styles.text2}>how can we serve you today ...</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          data={imageData}
          sliderWidth={screenWidth}
          itemWidth={340}
          renderItem={({ item }) => {
            return (
              <View>
                  <Image
                    style={styles.bannerImageStyle}
                    source={item.imageUrl}
                    resizeMode="contain"
                  />
              </View>
            );
          }}
          layout="default"
          autoplay
          loop
          onSnapToItem={(index) => setIndex(index) }
        />
      </View>
     <DotView activeSlide={indexVal}/>
     </View>
  )
};

export default ComponentCarousel;
