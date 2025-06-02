import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const habits = [
  { id: '1', title: '每天阅读30分钟' },
  { id: '2', title: '每天运动30分钟' },
  { id: '3', title: '冥想10分钟' },
];

export default function IndexPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>我的习惯</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Link href={{
            pathname: "/habits/[id]",
            params: { id: item.id },
          }}
            asChild
          >
            <TouchableOpacity style={styles.habitItem}>
              <Ionicons name='checkmark-circle-outline' size={24} color="#4CAF50" />
              <Text style={styles.habitText}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />

      <Link
        href={{
          pathname: "/habits/create",
        }}
        asChild
      >
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>添加习惯</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    gap: 12,
  },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  habitText: {
    fontSize: 18,
    marginLeft: 12,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
  }
})