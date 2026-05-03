import {View, Text, StyleSheet} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default  function Course(){
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.con}>
            <Stack.Screen options={{ title: `Course : ${id}` }} />
            <Text style={styles.txt}>
                Welcome to the {id} masterclass
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
    }
})