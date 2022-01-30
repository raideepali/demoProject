import { Dimensions, StyleSheet } from "react-native"
const screenWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    marginTop:10,
    marginLeft: screenWidth>324?25:10,
    justifyContent:'center',
    alignItems:'center',
    marginRight: -5,
  },
  mainContainer: {
    width: 90,
    height: 90,
    borderRadius: 24,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#009999'
  },
  itemName: {
    color: 'white',
    fontSize: 10,
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
    flexDirection: 'row', flexWrap: 'wrap',
  },
  iconStyle:{
    alignItems:'center',marginBottom:5
  }
})

export default styles;