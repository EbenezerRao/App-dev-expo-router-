import {Stack} from 'expo-router';

export default function Layout(){
    return (
        <Stack
            screenOptions={{
                headerStyle : {backgroundColor : '#6200EE'},
                headerTintColor : '#ffffff',
                headerTitleStyle : {fontWeight : 'bold'}
            }}
        >
            <Stack.Screen name='index' options={{title : 'Ebby s Academy'}}/>
        </Stack>
    )
}