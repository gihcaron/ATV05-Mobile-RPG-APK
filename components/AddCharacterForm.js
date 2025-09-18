import React from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { TextInput, Button } from "react-native-paper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function AddCharacterForm({ value, onChangeText, onSubmit }) {
  function handleSubmit() {
    Keyboard.dismiss(); // 
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  }
  return (
    <View style={styles.inputRow}>
      <TextInput
        mode="outlined"
        style={styles.input}
        placeholder="🎭 Coloque aqui o nome do novo personagem..."
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
        theme={{ colors: { primary: '#E69A28' } }}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        contentStyle={{ height: 48 }}
        labelStyle={{ fontSize: 18 }}
        buttonColor="#C5282F"
        textColor="#E69A28"
        icon={({ size, color }) => (
          <MaterialIcons name="person-add" size={size} color={color} />
        )}
      >
       
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#F4E4BC",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: 50,
    height: 48,
    alignSelf: 'center',
  },
});
