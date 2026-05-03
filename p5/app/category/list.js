import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function CategoryList() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Stack.Screen options={{ title: 'All Categories' }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Category Catalog</Text>
            <Text>1. Web Dev</Text>
            <Text>2. UI/UX Design</Text>
            <Text>3. Content Writing</Text>
        </View>
    );
}