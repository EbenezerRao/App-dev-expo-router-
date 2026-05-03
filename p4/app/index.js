import {View, Text, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return(
        <View style={Styles.con}>
            <Text style={Styles.txt}>Home</Text>
            <Link style={Styles.link} href='/user/Ebby'>View Ebby's Profile</Link>
            <Link style={Styles.link} href='/user/Ram'>View Ram's Profile</Link>
            <Link style={Styles.link} href='/user/Tim'>View Tim's Profile</Link>
        </View>
    )
}

const Styles = StyleSheet.create({
    con : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },

    txt : {
        fontSize : 22,
        fontWeight : 'bold',
        marginBottom : 10
    },

    link : {
        marginTop : 20,
        color : 'blue',
        fontSize : 18
    }
})