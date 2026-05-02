

import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function SupportHome() {
    return (
        <View style={Styles.cont}>
            <Text style={Styles.txt}>Support Center 🛠️</Text>
            
            {/* Using the asChild pattern instead of Button */}
            <Link href="/support/faq" asChild>
                <Pressable style={Styles.btn}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Go to FAQ</Text>
                </Pressable>
            </Link>

            <Link href="/" style={{ marginTop: 20, color: 'blue' }}>
                Back to Dashboard
            </Link>
        </View>
    );
}

const Styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    btn: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    }
});