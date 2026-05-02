import { View, Text } from "react-native";
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Link href="/test" style={{ color: 'blue' }}>Test Routing</Link>
        </View>
    );
}