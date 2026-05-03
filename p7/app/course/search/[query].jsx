import {View, Text, StyleSheet} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function Search() {
    const { query } = useLocalSearchParams();

    return (
        <View style={styles.con}>
            <Stack.Screen options = {{title : `Searching for ${query}`}} />
            <Text style={styles.txt}>
                Found 0 results for {query}. Try a different skill!
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
        fontSize: 22,
        fontWeight: 'bold'
    }
})