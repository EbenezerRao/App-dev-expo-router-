import {View, Text, StyleSheet} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function Booking() {
    const {booking} = useLocalSearchParams()

    return (
        <View style={styles.con}>
            <Stack.Screen options = {{title : `Booking Details`}} />
            <Text style={styles.txt}>{booking.join(' -> ')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    con : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    txt : {
        fontSize : 20,
        fontWeight : 'bold'
    }
})