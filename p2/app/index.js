import { Link } from 'expo-router';
import { View, Text, StyleSheet } from "react-native";

export default function Home(){
    return(
        <View style = {Styles.cont}>
            <Text style = {Styles.txt}>Welcome to my new project</Text>
            <Link href="/details" style = {Styles.link}>
                Go to Details
            </Link>
        </View>
    )
}

const Styles = StyleSheet.create({
    cont : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },

    txt : {
        fontSize : 22,
        fontWeight : 'bold'
    },

    link : {
        marginTop : 20,
        color : 'blue',
        fontSize : 18
    }
})