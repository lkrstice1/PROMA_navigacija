import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetaljEkran = ({ route, navigation }) => {
    const {broj, poruka} = route.params
    return(
        <View style = {stil.ekran}>
            <Text>Ekran s detaljima</Text>
            <Text>Broj s prethodnog ekrana: {broj}</Text>
            <Text>Poruka s prethodnog ekrana: {route.params.poruka}</Text>
            <Text>{Date()}</Text>
            <Button 
                title = "Detalji"
                onPress = {() => {
                    navigation.push('Detalji');
                }}
            />
            <Button 
                title='Natrag' 
                onPress={() => 
                    navigation.goBack()
                } 
            />
            <Button 
                title='Reset' 
                onPress={() => navigation.setParams({broj: 0})}
            />
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DetaljEkran;