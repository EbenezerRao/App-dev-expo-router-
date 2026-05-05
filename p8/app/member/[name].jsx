import {View, Text, StyleSheet} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function Member(){
    const {name} = useLocalSearchParams();

    return (
        <View style={styles.con}>
            <Stack.Screen options={{title : `${name}'s Profile`}} />
            <Text style={styles.txt}>
                Welcome back to the VIP Lounge, {name}!
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