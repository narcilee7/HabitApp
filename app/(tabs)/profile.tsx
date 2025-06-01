import { Button, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>个人中心</Text>
      <Button title="退出登录" onPress={() => { console.log('退出登录') }} />
    </View>
  )
}

export default Profile