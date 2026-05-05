import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack
            screenOptions={{
                headerStyle : {backgroundColor : '#003366}'},
                headerTintColor : '#FFD700',
                headerTitleStyle : {fontSize : 24, fontWeight : 'bold'}
            }}
        >
            <Stack.Screen name="index" options={{title : 'Karya Logistics Hub'}}/>
        </Stack>
    )
}