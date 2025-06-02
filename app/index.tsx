import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Index() {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.user.token);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setReady(true);
    }, 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (token === undefined) return;

    if (!token) {
      router.replace('/(auth)/login');
    } else {
      router.replace('/(tabs)');
    }
  }, [token, router, ready]);

  if (token === undefined) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
