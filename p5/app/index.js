import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Find Your Next Gig 🛠️</Text>

            <Pressable style={styles.press}>
                <Link href="/category/list" style={styles.link}>
                    <Text style={{ color: '#000000' }}>View All Categories</Text>
                </Link>
            </Pressable>

            <Link href="/category/Design" style={styles.link}>
                <Text style={{ color: '#4e9af1' }}>Explore Design Gigs</Text>
            </Link>

            <Link href="/category/Coding" style={styles.link}>
                <Text style={{ color: '#4e9af1' }}>Explore Coding Gigs</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
    header: { fontSize: 24, fontWeight: 'bold' },
    link: { fontSize: 18, borderBottomWidth: 1, borderBottomColor: '#000000' },
    press: { marginTop: 10, backgroundColor: '#4e9af1', padding: 10, borderRadius: 5 }
});