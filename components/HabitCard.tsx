import { Button, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

interface Props {
  habit: {
    title: string;
    id: string;
  }
}

const HabitCard = ({ habit }: Props) => {
  return (
    <View style={{ borderWidth: 1, padding: 15, marginBottom: 10, borderRadius: 10 }}>
      <Text style={{ fontSize: 18 }}>{habit.title}</Text>
      <Link href={{
        pathname: "/habbit/[id]",
        params: { id: habit.id },
      }}>
        <Text style={{ color: 'blue', marginTop: 5 }}>查看详情</Text>
      </Link>
      <Button title="打卡" onPress={() => { }} />
    </View>
  )
}

export default HabitCard