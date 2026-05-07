import {View, Text, StyleSheet} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function Jobs(){
    const {id} = useLocalSearchParams();

    return (
        <View style={styles.con}>
            <Stack.Screen options={{title : `Details for Job ID : ${id}`}} />
            <Text style={styles.txt}>Job ID: {id}</Text>
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
    }
})