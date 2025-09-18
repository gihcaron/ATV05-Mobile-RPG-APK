import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import CharacterCard from "./components/CharacterCard";
import AddCharacterForm from "./components/AddCharacterForm";
import Header from "./components/Header";

export default function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: "🧙‍♂️ Gandalf o Mago", recruited: 0 },
    { id: 2, name: "⚔️ Aragorn o Guerreiro", recruited: 1 },
    { id: 3, name: "🏹 Legolas o Arqueiro", recruited: 0 }
  ]);
  const [newCharacter, setNewCharacter] = useState("");

  function addCharacter() {
    if (newCharacter === "") return;
    const newId = characters.length + 1;
    const newCharacterObj = {
      id: newId,
      name: newCharacter,
      recruited: 0
    };
    const newList = [newCharacterObj];
    const allCharacters = newList.concat(characters);
    setCharacters(allCharacters);
    setNewCharacter("");
  }

  function toggleRecruit(character) {
    const newCharacters = characters.map((c) =>
      c.id === character.id ? { ...c, recruited: c.recruited ? 0 : 1 } : c
    );
    setCharacters(newCharacters);
  }

  function removeCharacter(character) {
    Alert.alert("Remover Personagem", `Remover "${character.name}" da party?`, [
      { text: "Não" },
      {
        text: "Sim",
        onPress: () => {
          setCharacters(characters.filter((c) => c.id !== character.id));
        }
      }
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <AddCharacterForm
        value={newCharacter}
        onChangeText={setNewCharacter}
        onSubmit={addCharacter}
      />
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onToggleRecruit={toggleRecruit}
            onRemove={removeCharacter}
          />
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0E0A",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  list: {
    flex: 1,
  },
});