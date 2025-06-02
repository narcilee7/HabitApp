import { useLoginMutation } from '@/services/userApi';
import { setUser } from '@/store/slices/userSlice';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Snackbar, Text, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const dispath = useDispatch()

  const handleLogin = async () => {
    try {
      const result = await login({ email, password }).unwrap();
      dispath(
        setUser({
          token: result.token,
          userInfo: result.user,
        })
      )
      router.replace('/(tabs)')
    } catch (error) {
      console.log(error)
      setErrorMsg("登录失败")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>欢迎回来!</Text>
      <TextInput
        label="邮箱"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="密码"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        loading={isLoading}
        style={styles.button}
      >
        登录
      </Button>

      <Button
        onPress={() => router.push('/(auth)/register')}
        style={styles.link}
      >
        还没有账号？注册一个
      </Button>

      <Snackbar
        visible={!!errorMsg}
        onDismiss={() => setErrorMsg('')}
        action={{ label: '关闭', onPress: () => setErrorMsg('') }}
      >{errorMsg}</Snackbar>
    </View>
  )
}

export default Login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f8fa'
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    borderRadius: 8,
  },
  link: {
    marginTop: 16,
    alignSelf: 'center'
  }
})