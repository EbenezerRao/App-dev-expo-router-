import {Stack} from 'expo-router';

export default function Layout(){
    return(
        <Stack
            screenOptions={{
                headerStyle : {backgroundColor : '#000000'},
                headerTintColor : '#00FF00',
                headerTitleStyle : {fontWeight : 'bold'}
            }}
        >
            <Stack.Screen name='index' options={{title : 'Ebby s Gym'}} />
        </Stack>
    )
}