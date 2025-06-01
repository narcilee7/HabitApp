import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function HabitDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>习惯详情 - {id}</Text>
      <Button title="返回" onPress={() => router.back()} />
    </View>
  );
}
