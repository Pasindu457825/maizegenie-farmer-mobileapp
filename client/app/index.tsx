import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { apiHealth } from "../lib/api";

export default function Home() {
  const [resp, setResp] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Check API Health"
        onPress={async () => {
          try {
            const r = await apiHealth();
            setResp(JSON.stringify(r));
          } catch (e: any) {
            setResp("Error: " + e.message);
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>{resp}</Text>
    </View>
  );
}
