import {View, Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Extra() {
    const { extra } = useLocalSearchParams();

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20}}>Deep path Trace : </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{extra.join(' -> ')}</Text>
        </View>
    )
}