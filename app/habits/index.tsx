import { View, Text, Button, FlatList } from 'react-native';
import { Link } from 'expo-router';

const habits = [
  { id: '1', title: '每天读书' },
  { id: '2', title: '运动30分钟' },
];

export default function HabitList() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>我的习惯</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{
            pathname: '/habits/[id]',
            params: { id: item.id },
          }} style={{ fontSize: 18, marginVertical: 10 }}>
            {item.title}
          </Link>
        )}
      />
      <Link href="/habits/create">
        <Button title="添加习惯" />
      </Link>
    </View>
  );
}
