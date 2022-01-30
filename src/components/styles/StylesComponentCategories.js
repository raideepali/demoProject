import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    marginLeft: 20,
    marginRight: 10,
    alignItems:'flex-end',
  },
  mainContainer: {
    width: 300,
    height: 96,
    justifyContent: 'center',
    padding: 8,
  },
  secondContainer: {
    marginTop:10,
    marginLeft: 10,
    marginRight: 20,
    alignItems:'flex-start',

  },
  image1:{
    borderTopRightRadius: 50,
    borderBottomRightRadius:50,
    overflow:"hidden",
    elevation:5,
  },
  image2:{  
    borderTopLeftRadius: 50,
    borderBottomLeftRadius:50,
    overflow:"hidden",
    elevation:5,
  },
  itemName: {
    color: 'black',
    fontSize: 6,
    letterSpacing: 0,
    alignItems:'center',
    alignSelf:'center'
  },
  itemNameContainer: {
    marginTop: 5,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  orederItem:{
    flexDirection: 'row', flexWrap: 'wrap'
  },
  customImage1:{
    alignSelf:'flex-end'
  },
  customImage2:{
   alignSelf:'flex-start'
  },
  rowStyle:{
    flexDirection:'row',justifyContent:'space-between',marginHorizontal:20
  },
  imageStyle:{
    height:50,
    width:50
  }
})

export default styles;