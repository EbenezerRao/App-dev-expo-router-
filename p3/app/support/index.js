import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Faq() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>FAQ Screen</Text>
            
            {/* asChild tells the Link to pass its behavior to the Pressable inside */}
            <Link href="/" asChild>
                <Pressable style={{ backgroundColor: 'black', padding: 10, marginTop: 10 }}>
                    <Text style={{ color: 'white' }}>Go Home</Text>
                </Pressable>
            </Link>
        </View>
    );
}