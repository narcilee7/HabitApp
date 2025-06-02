import { Slot } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <Slot />
      </PaperProvider>
    </ReduxProvider>
  );
}
