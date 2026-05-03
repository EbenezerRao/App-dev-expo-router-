import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function UserProfile() {
    // This 'name' variable comes directly from the filename [name].js
    const { name } = useLocalSearchParams(); 

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title : `${name}'s Profile`}}/>
            <Text style={styles.title}>Profile Page</Text>
            <View style={styles.card}>
                <Text style={styles.welcome}>Welcome, {name}!</Text>
                <Text style={styles.info}>This page was generated dynamically.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
    title: { fontSize: 20, color: '#888', textTransform: 'uppercase' },
    card: { padding: 30, backgroundColor: '#fff', borderRadius: 15, marginTop: 10, elevation: 5 },
    welcome: { fontSize: 28, fontWeight: 'bold', color: '#FF5733' },
    info: { marginTop: 10, color: '#666' }
});