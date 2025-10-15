// app/sign-in.tsx
import { Link, useRouter } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useAuth } from '../src/providers/AuthProvider';

export default function SignIn() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async () => {
    setSubmitting(true); setError(null);
    const { error } = await signIn(email.trim(), password);
    setSubmitting(false);
    if (error) setError(error);
    else router.replace('/');
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text variant="headlineMedium" style={{ marginBottom: 16 }}>Sign In</Text>
      <TextInput label="Email" autoCapitalize="none" keyboardType="email-address"
        value={email} onChangeText={setEmail} style={{ marginBottom: 12 }} />
      <TextInput label="Password" secureTextEntry value={password}
        onChangeText={setPassword} style={{ marginBottom: 12 }} />
      {error ? <Text style={{ color: 'red', marginBottom: 12 }}>{error}</Text> : null}
      <Button mode="contained" onPress={onSubmit} loading={submitting} disabled={submitting}>
        Sign In
      </Button>
      <Link href="/sign-up" style={{ marginTop: 12 }}>Create an account</Link>
    </View>
  );
}