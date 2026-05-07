import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Apply() {
    const {apply} = useLocalSearchParams();

    return(
        <View style={styles.con}>
            <Stack.Screen options={{title : `Apply for Job `}} />
            <Text style={styles.txt}>Applying for Job ID: {apply.join(' -> ')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 18,
        textAlign: 'center',
        margin: 20
    }
})