import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.con}>
            <Text style={styles.txt}>Job Searcher</Text>

            <Link href = '/jobs'>
                <Pressable style={styles.btn}>
                    <Text style={styles.txt}>Browse Jobs</Text>
                </Pressable>
            </Link>

            <Link href = '/jobs/777'>
                <Pressable style={styles.btn}>
                    <Text style={styles.txt}>Software Engineer Role</Text>
                </Pressable>
            </Link>

            <Link href = '/jobs/777/apply/Ebby/Resume.pdf'>
                <Pressable style={styles.btn}>
                    <Text style={styles.txt}>Apply for Position</Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    con : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    txt : {
        fontSize : 24,
        fontWeight : 'bold' 
    },

    btn : {
        marginTop : 20,
        backgroundColor : '#FF8C00',
        padding : 10,
        borderRadius : 5
    }
})