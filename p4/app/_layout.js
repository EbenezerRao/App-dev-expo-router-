import { Stack } from "expo-router";

export default function Layout(){
    return (
        <Stack 
            screenOptions={{
                headerStyle : {backgroundColor : '#FFC0CB'},
                headerTintColor : 'black',
                headerTitleStyle : {fontWeight : 'bold'}
            }}>
                <Stack.Screen name="index" options={{title : 'Home'}}/>
                <Stack.Screen name="details" options={{title : 'Details'}}/>
            </Stack>
    )
}