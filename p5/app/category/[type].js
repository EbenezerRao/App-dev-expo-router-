import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function CategoryDetail() {
    const { type } = useLocalSearchParams(); 

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: `${type} Gigs` }} />
            
            <Text style={styles.msg}>
                Browsing all available jobs in the <Text style={{ fontWeight: 'bold' }}>{type}</Text> department.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    msg: { fontSize: 18, textAlign: 'center', color: '#333' }
});