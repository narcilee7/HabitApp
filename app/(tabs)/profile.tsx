import { logout } from '@/store/users/userSlice';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    // 让持久化数据也清理掉
    import('redux-persist').then(({ purgeStoredState }) => {
      import('../../store').then(({ persistConfig }) => {
        purgeStoredState(persistConfig as any);
      });
    });

    // 跳转到登录页面
    router.replace('/(auth)/login');
  };


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>个人中心</Text>
      <Button title="退出登录" onPress={handleLogout} />
    </View>
  )
}

export default Profile