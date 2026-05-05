import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.con}>
            <Text style={styles.txt}>Welcome to the Home Page</Text>

            <Link href='/ship' asChild>
                <Pressable style={styles.btn}>
                    <Text style={styles.txt}>View all Shipments</Text>
                </Pressable>
            </Link>

            <Link href='/ship/Suresh' asChild>
                <Pressable style={styles.btn}>
                    <Text style={styles.txt}>Track Driver Suresh</Text>
                </Pressable>
            </Link>

            <Link href='/ship/Suresh/Lucknow/UP/In-Transmit' asChild>
                <Pressable style={styles.btn}>
                    <Text style={styles.txt}>Full Audit Report</Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    con  :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt  :{
        fontSize: 18,
        fontWeight: 'bold'
    },

    btn : {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    }
})