// app/sign-up.tsx
import { Link, useRouter } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useAuth } from '../src/providers/AuthProvider';

export default function SignUp() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async () => {
    setSubmitting(true); setError(null); setMessage(null);
    const { error } = await signUp(email.trim(), password);
    setSubmitting(false);
    if (error) setError(error);
    else {
      setMessage('Account created. Confirm email if required, then sign in.');
      // Optionally redirect straight to sign-in:
      router.replace('/sign-in');
    }
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text variant="headlineMedium" style={{ marginBottom: 16 }}>Create account</Text>
      <TextInput label="Email" autoCapitalize="none" keyboardType="email-address"
        value={email} onChangeText={setEmail} style={{ marginBottom: 12 }} />
      <TextInput label="Password" secureTextEntry value={password}
        onChangeText={setPassword} style={{ marginBottom: 12 }} />
      {error ? <Text style={{ color: 'red', marginBottom: 12 }}>{error}</Text> : null}
      {message ? <Text style={{ color: 'green', marginBottom: 12 }}>{message}</Text> : null}
      <Button mode="contained" onPress={onSubmit} loading={submitting} disabled={submitting}>
        Sign Up
      </Button>
      <Link href="/sign-in" style={{ marginTop: 12 }}>Back to Sign In</Link>
    </View>
  );
}