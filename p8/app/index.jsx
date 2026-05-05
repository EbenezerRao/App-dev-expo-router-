import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Link} from 'expo-router';

export default function Home(){
    return (
        <View style={styles.con}>
            <Text style={styles.txt}>Welcome to the P8 App</Text>

            <Pressable style={styles.btn} asChild>
                <Link href='/member/Ebby'>
                    <Text style={styles.txt}>
                        View Ebby's Profile
                    </Text>
                </Link>
            </Pressable>

            <Pressable style={styles.btn} asChild>
                <Link href='/member/Steve'>
                    <Text style={styles.txt}>
                        View Steve's Profile
                    </Text>
                </Link>
            </Pressable>

            <Pressable style={styles.btn} asChild>
                <Link href='/member/admin'>
                    <Text style={styles.txt}>
                        Admin Panel
                    </Text>
                </Link>
            </Pressable>

            <Link href="/member/Ebby/stats/2026/progress" asChild>
                <Pressable style={styles.btn}>
                    <Text style={styles.txt}>View Deep Stats</Text>
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

    txt : {
        fontSize: 18,
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