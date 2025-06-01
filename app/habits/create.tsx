import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";



export default function CreateHabit() {
  const [title, setTitle] = useState('')

  const handleCreate = () => {
    console.log('create habit', title);
    router.push({
      pathname: '/habbit/index',
      params: { title },
    });
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>新建习惯</Text>
      <TextInput
        placeholder="请输入习惯标题"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <Button title="保存" onPress={handleCreate}></Button>
    </View>
  )
}