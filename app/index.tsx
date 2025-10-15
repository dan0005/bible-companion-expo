// app/index.tsx
import { useRouter } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useAuth } from '../src/providers/AuthProvider';

export default function Welcome() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.replace('/sign-in');
    }
  }, [loading, user, router]);

  if (loading || !user) return null;

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text variant="headlineMedium" style={{ marginBottom: 12 }}>
        Hello{user?.email ? `, ${user.email}` : ''} 👋
      </Text>
      <Text style={{ marginBottom: 24 }}>Welcome to your Bible Companion app.</Text>
      <Button mode="contained" onPress={signOut}>Sign out</Button>
    </View>
  );
}