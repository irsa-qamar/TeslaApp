import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles';
import Button from '../Button';

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image} = props.car;
    return (
    <View style={styles.itemArea}>
        <ImageBackground style={styles.image} source={image}/>
        <View style={styles.textArea}>
            <Text style={styles.primaryText}>{name}</Text>
            <Text style={styles.secondaryText}>{tagline}{' '}
            <Text style={styles.text}>{taglineCTA}</Text>
            </Text>
        </View>
        <View style={styles.buttonView}>
            <Button text="CUSTOM ORDER" type="primary"/>
            <Button text="EXISTING ENVENTORY" type="secondary"/>
        </View>
    </View>
    )
}

export default CarItem;
