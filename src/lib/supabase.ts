import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://larwgunoajtecvfavszm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcndndW5vYWp0ZWN2ZmF2c3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0MTczNzIsImV4cCI6MjA3NTk5MzM3Mn0.YjtVX-WzMy3ZNfTcgpa-EdHXhWgutNodmin7wMpAxbE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    storage: {
      getItem: (key) => AsyncStorage.getItem(key),
      setItem: (key, value) => AsyncStorage.setItem(key, value),
      removeItem: (key) => AsyncStorage.removeItem(key),
    },
    storageKey: 'sb-biblecompanion-auth',
  },
});
