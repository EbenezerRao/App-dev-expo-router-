import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function ServiceList() {
    return (
        <View style={styles.con}>
            {/* This sets the header specifically for this page */}
            <Stack.Screen options={{ title: "All Services" }} />
            
            <Text style={styles.header}>Available Categories</Text>

            <Link href="/service/Plumbing" asChild>
                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Plumbing</Text>
                </Pressable>
            </Link>

            <Link href="/service/Electrician" asChild>
                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Electrician</Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    con: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    btn: { backgroundColor: '#FF8C00', padding: 15, borderRadius: 8, marginTop: 10, width: '80%' },
    btnText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
});