import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerContainer:{
        position: 'absolute',
        top: 25,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
    },
    logo:{
        width: 100,
        height: 22,
        resizeMode: 'contain'
    },
    menu:{
        height: 22,
        width: 40,
        resizeMode: 'contain'
    }
})

export default styles
