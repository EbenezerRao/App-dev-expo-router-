import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Details() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Project Details 📋</Text>
            <Text style={styles.subtitle}>This is a static route in P2.</Text>
            
            <Link href="/" style={styles.link}>
                ← Go Back Home
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
    subtitle: { fontSize: 16, color: 'gray', marginTop: 10 },
    link: { marginTop: 30, color: 'red' }
});