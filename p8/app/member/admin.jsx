import {View, Text, StyleSheet} from 'react-native';
import { Stack } from 'expo-router';

export default function Admin(){
    return (
        <View style={styles.con}>
            <Stack.Screen options={{title : 'Admin Dashboard'}} />
            <Text style={styles.txt}>
                System Administrator Access Only.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    con : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt : {
        fontSize: 18,
        fontWeight: 'bold'
    }
})