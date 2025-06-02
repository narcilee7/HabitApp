import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          borderRadius: 20,
          marginHorizontal: 0,
          marginBottom: 20,
          height: 52,
          width: '100%',
          shadowColor: '#000',
          position: 'absolute',
          overflow: 'hidden',
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '打卡',
          tabBarIcon: ({ color, size }) => <Ionicons name="checkbox" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: '日历',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color}
          />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
