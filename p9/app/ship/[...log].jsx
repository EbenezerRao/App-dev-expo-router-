import { Stack , useLocalSearchParams} from "expo-router";
import { use } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Log(){
    const {log} = useLocalSearchParams();

    return (
        <View style={styles.con}>
            <Stack.Screen options={{title : `Log ${log}`}} />
            <Text style={styles.txt}>Logs : {log.join(' -> ')}</Text>
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