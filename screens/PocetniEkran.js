import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const PocetniEkran = ({ navigation }) => {
    const [ime, postaviIme] = React.useState('')
    return(
        <View style = {stil.ekran}>
            <Text>Pocetni ekran</Text>
            <TextInput 
                value={ime} 
                onChangeText={(t) => postaviIme(t)}
            />

            <Button 
                title='Detalji' 
                onPress={() => {
                    navigation.navigate('Detalji', {
                        broj: 5,
                        poruka: "Dobar dan",
                        ime: ime
                    });
                }}
            />
            <Button 
                title='Natrag'
                onPress={() => {
                    navigation.goBack()
                }}
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

export default PocetniEkran