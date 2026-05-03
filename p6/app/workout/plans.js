import {View, Text, StyleSheet} from 'react-native';
import {Stack} from 'expo-router';

export default function Plans() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title : 'Plans'}}/>
            <Text style={styles.header}>Plans</Text>
            <Text style={styles.txt}>1. Beginner</Text>
            <Text style={styles.txt}>2. Intermediate</Text>
            <Text style={styles.txt}>3. Advanced</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    txt : {
        fontSize: 20
    }
});