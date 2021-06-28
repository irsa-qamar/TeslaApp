import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'

const Button = (props) => {
    const {text, type} = props
    const backgroundColor = type === 'primary' ? "gray" : "lightgray";
    const color = type === 'primary' ? "white" : "black";

    return (
        <View style={styles.buttonView}>
            <TouchableOpacity 
            onPress={() => Alert.alert('Button Pressed')}
            style={[styles.button, {backgroundColor: backgroundColor} ]}>
                <Text style={[styles.buttonText, { color: color}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button
