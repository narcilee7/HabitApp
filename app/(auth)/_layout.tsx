import { Stack } from "expo-router";

export default function AuthLayout() {
  console.log(1);
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={{ title: '登录', headerShown: false }} />
      <Stack.Screen name="register" options={{ title: '注册', headerShown: false }} />
    </Stack>
  );
}