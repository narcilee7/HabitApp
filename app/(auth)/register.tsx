import { useRegisterMutation } from '@/services/userApi';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Snackbar, Text, TextInput } from 'react-native-paper';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [register, { isLoading }] = useRegisterMutation();

  const handleRegister = async () => {
    try {
      await register({ email, password, username }).unwrap();
      router.replace("/(auth)/login");
    } catch (error) {
      console.log(error);
      setErrorMsg("注册失败")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="headlineMedium">Register</Text>

      <TextInput
        label='邮箱'
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <TextInput
        label='用户名'
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        label="密码"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button mode="contained" onPress={handleRegister} loading={isLoading} style={styles.button}>
        注册
      </Button>

      <Button onPress={() => router.push('/(auth)/login')} style={styles.link}>
        已有账号？去登录
      </Button>

      <Snackbar
        visible={!!errorMsg}
        onDismiss={() => setErrorMsg('')}
        action={{ label: '关闭', onPress: () => setErrorMsg('') }}
      >
        {errorMsg}
      </Snackbar>
    </View>
  )
}

export default Register

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
    fontWeight: 'bold'
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