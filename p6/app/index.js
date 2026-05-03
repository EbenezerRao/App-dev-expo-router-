import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.con}>
            <Text style={styles.txt}>Home</Text>

            <Pressable style={styles.btn}>
                <Link href="/workout/plans">
                    <Text style={styles.txt}>
                        Go to Plans
                    </Text>
                </Link>
            </Pressable>
            
            <Pressable style={styles.btn}>
                <Link href="/workout/arms">
                    <Text style={styles.txt}>
                        Go to Arms Workout
                    </Text>
                </Link>
            </Pressable>

            <Pressable style={styles.btn}>
                <Link href="/workout/legs">
                    <Text style={styles.txt}>
                        Go to Legs Workout
                    </Text>
                </Link>
            </Pressable>
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
    },

    btn  :{
        marginTop: 20,
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8
    }
})