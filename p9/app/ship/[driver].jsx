import { Stack , useLocalSearchParams} from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Driver(){
    const { driver } = useLocalSearchParams();

    return (
        <View style={styles.con}>
            <Stack.Screen options={{title : `Driver : ${driver}`}} />
            <Text style={styles.txt}>Driver {driver} is currently on route</Text>
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