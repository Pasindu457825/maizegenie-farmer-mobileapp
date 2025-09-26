// mobile/App.tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

// If you already have lib/api.ts, you can import apiHealth from there instead:
const API_BASE = 'http://192.168.1.4:8000';

export default function App() {
  const [resp, setResp] = useState('');

  return (
    <View style={{ padding: 50 }}>
      <Button
        title="Check API Health"
        onPress={async () => {
          try {
            const r = await axios.get(`${API_BASE}/health`);
            setResp(JSON.stringify(r.data));
          } catch (e: any) {
            setResp('Error: ' + e.message);
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>{resp}</Text>
    </View>
  );
}
