import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      elevation:3,
      borderWidth:1,
      borderColor: 'rgba(32, 32, 32, 0.1)',
      shadowRadius: 24,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOpacity: 5,
      justifyContent:'space-between',
    },
    imageStyle:{
      height:50,
      width:50,
      marginTop:20,
      marginHorizontal:16,
      marginBottom:10
    },
    iconStyle:{
      marginHorizontal:24,marginTop:25
    }
  });
  
  export default styles;