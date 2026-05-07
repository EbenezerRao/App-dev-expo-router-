import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack 
            screenOptions={{
                headerStyle : {backgroundColor : '#1E1E1E'},
                headerTintColor : '#00E676',
                headerTitleStyle : {fontSize : 24, fontWeight : 'bold'}
            }}
        >
            <Stack.Screen name="index" options={{title : 'Karya Jobs'}} />
        </Stack>
    )
}