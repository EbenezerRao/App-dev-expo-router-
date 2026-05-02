import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack 
            screenOptions={{
                headerStyle: {backgroundColor : '#1A1A1B'},
                headerTintColor: 'white',
                headerTitleStyle: {color: 'white', fontWeight: 'bold'}
            }}
        />
    );
}