import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
      itemArea:{
        height: Dimensions.get('window').height,  
        width: '100%'  
      },
      textArea:{
        width: '100%',
        alignItems: 'center',
        paddingTop: '30%'
      },
      primaryText:{
        fontSize: 50,
        fontWeight: '500',
        color: 'white'
      },
      secondaryText:{
        fontSize: 15,
        color: 'gray',
      },
      text:{
        fontSize: 15,
        color: 'darkgray',
        textDecorationLine: 'underline'
      },
      image:{
        position: 'absolute',
        width: '100%',
        height: "100%",
      },
      buttonView:{
        position: 'absolute',
        bottom: 40,
        width: '100%'
      }
});

export default styles;
