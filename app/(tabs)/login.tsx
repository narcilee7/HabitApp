import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>登录</Text>
      <TextInput placeholder="用户名" style={{ borderWidth: 1, marginBottom: 10, padding: 10 }} />
      <TextInput placeholder="密码" secureTextEntry style={{ borderWidth: 1, marginBottom: 20, padding: 10 }} />
      <Button title="登录" onPress={() => { }} />
    </View>
  )
}

export default Login
