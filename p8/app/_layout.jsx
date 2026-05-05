import { Stack } from "expo-router";

export default function Layout() {
    return(
        <Stack
        screenOptions={{
            headerStyle : {backgroundColor : '#121212'},
            headerTintColor : '#FFD700',
            headerTitleStyle : {fontSize : 24, fontWeight : 'bold'}
        }}
        >
        <Stack.Screen name = 'index' options={{title : 'Golds Gym VIP'}} />
    </Stack>
    )
}