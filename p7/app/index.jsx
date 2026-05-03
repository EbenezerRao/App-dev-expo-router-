import {View, Text, StyleSheet,  Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Home(){
    return (
        <View style={styles.con}>
            <Text style={styles.header}>Welcome to Sasta Udemy</Text>

            <Link href='/course/search' asChild>
                <Pressable style={styles.btn}>
                    <Text style={{ color: 'white' }}>
                        Go to Course
                    </Text>
                </Pressable>
            </Link>

            <Link href='/course/Native' asChild>
                <Pressable style={styles.btn}>
                    <Text style={{ color: 'white' }}>
                        Go to Native
                    </Text>
                </Pressable>
            </Link>

            <Link href='/course/search/FastAPI' asChild>
                <Pressable style={styles.btn}>
                    <Text style={{ color: 'white' }}>
                        Go to FastAPI
                    </Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    con : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    header : {
        fontSize: 24,
        fontWeight: 'bold'
    },

    btn : {
        marginTop: 20,
        backgroundColor: '#86b4e5',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8
    }
})