import {useLocalSearchParams, Stack, Screen} from 'expo-router';
import {View, Text, StyleSheet} from 'react-native';

export default function Workout(){
    const { muscle } = useLocalSearchParams();
    return(
        <View style={Style.con}>
            <Stack.Screen options={{ title: `${muscle} Day` }} />
            <Text style={Style.txt}>
                Starting your custom {muscle} workout
            </Text>
        </View>
    )
}

const Style = StyleSheet.create({
    con : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt : {
        fontSize: 22,
    }
})