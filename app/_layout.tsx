import { Slot } from 'expo-router';
import { View } from 'react-native';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <PersistGate
        loading={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        }
        persistor={persistor}
      />
      <PaperProvider>
        <Slot />
      </PaperProvider>
    </ReduxProvider>
  );
}
